# `mailmanagerIngressPoint` Submodule <a name="`mailmanagerIngressPoint` Submodule" id="@cdktn/provider-aws.mailmanagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerIngressPoint <a name="MailmanagerIngressPoint" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point aws_mailmanager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPoint(Construct Scope, string Id, MailmanagerIngressPointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig">MailmanagerIngressPointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig">MailmanagerIngressPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration">PutIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration">ResetIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy">ResetTlsPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIngressPointConfiguration` <a name="PutIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration"></a>

```csharp
private void PutIngressPointConfiguration(IResolvable|MailmanagerIngressPointIngressPointConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(IResolvable|MailmanagerIngressPointNetworkConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts"></a>

```csharp
private void PutTimeouts(MailmanagerIngressPointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---

##### `ResetIngressPointConfiguration` <a name="ResetIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration"></a>

```csharp
private void ResetIngressPointConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsPolicy` <a name="ResetTlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy"></a>

```csharp
private void ResetTlsPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerIngressPoint.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerIngressPoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerIngressPoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

MailmanagerIngressPoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MailmanagerIngressPoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MailmanagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord">ARecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration">IngressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput">IngressPointConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput">RuleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput">TlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput">TrafficPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId">RuleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ARecord`<sup>Required</sup> <a name="ARecord" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord"></a>

```csharp
public string ARecord { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngressPointConfiguration`<sup>Required</sup> <a name="IngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration"></a>

```csharp
public MailmanagerIngressPointIngressPointConfigurationList IngressPointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a>

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration"></a>

```csharp
public MailmanagerIngressPointNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts"></a>

```csharp
public MailmanagerIngressPointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a>

---

##### `IngressPointConfigurationInput`<sup>Optional</sup> <a name="IngressPointConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfiguration[] IngressPointConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfiguration[] NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleSetIdInput`<sup>Optional</sup> <a name="RuleSetIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput"></a>

```csharp
public string RuleSetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---

##### `TlsPolicyInput`<sup>Optional</sup> <a name="TlsPolicyInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput"></a>

```csharp
public string TlsPolicyInput { get; }
```

- *Type:* string

---

##### `TrafficPolicyIdInput`<sup>Optional</sup> <a name="TrafficPolicyIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput"></a>

```csharp
public string TrafficPolicyIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleSetId`<sup>Required</sup> <a name="RuleSetId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId"></a>

```csharp
public string RuleSetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; }
```

- *Type:* string

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId"></a>

```csharp
public string TrafficPolicyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerIngressPointConfig <a name="MailmanagerIngressPointConfig" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string RuleSetId,
    string TrafficPolicyId,
    string Type,
    IResolvable|MailmanagerIngressPointIngressPointConfiguration[] IngressPointConfiguration = null,
    IResolvable|MailmanagerIngressPointNetworkConfiguration[] NetworkConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MailmanagerIngressPointTimeouts Timeouts = null,
    string TlsPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId">RuleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId">TrafficPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration">IngressPointConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]</code> | ingress_point_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]</code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy">TlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}.

---

##### `RuleSetId`<sup>Required</sup> <a name="RuleSetId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId"></a>

```csharp
public string RuleSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}.

---

##### `TrafficPolicyId`<sup>Required</sup> <a name="TrafficPolicyId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId"></a>

```csharp
public string TrafficPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}.

---

##### `IngressPointConfiguration`<sup>Optional</sup> <a name="IngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfiguration[] IngressPointConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]

ingress_point_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration MailmanagerIngressPoint#ingress_point_configuration}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfiguration[] NetworkConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#network_configuration MailmanagerIngressPoint#network_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#region MailmanagerIngressPoint#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts"></a>

```csharp
public MailmanagerIngressPointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#timeouts MailmanagerIngressPoint#timeouts}

---

##### `TlsPolicy`<sup>Optional</sup> <a name="TlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy"></a>

```csharp
public string TlsPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}.

---

### MailmanagerIngressPointIngressPointConfiguration <a name="MailmanagerIngressPointIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfiguration {
    string SecretArn = null,
    string SmtpPasswordWo = null,
    double SmtpPasswordWoVersion = null,
    IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration[] TlsAuthConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn">SecretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo">SmtpPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion">SmtpPasswordWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">TlsAuthConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]</code> | tls_auth_configuration block. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}.

---

##### `SmtpPasswordWo`<sup>Optional</sup> <a name="SmtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo"></a>

```csharp
public string SmtpPasswordWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}.

---

##### `SmtpPasswordWoVersion`<sup>Optional</sup> <a name="SmtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion"></a>

```csharp
public double SmtpPasswordWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}.

---

##### `TlsAuthConfiguration`<sup>Optional</sup> <a name="TlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration[] TlsAuthConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]

tls_auth_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#tls_auth_configuration MailmanagerIngressPoint#tls_auth_configuration}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration {
    IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore[] TrustStore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">TrustStore</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]</code> | trust_store block. |

---

##### `TrustStore`<sup>Optional</sup> <a name="TrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore[] TrustStore { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#trust_store MailmanagerIngressPoint#trust_store}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore {
    string CaContent,
    string CrlContent = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">CaContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">CrlContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}. |

---

##### `CaContent`<sup>Required</sup> <a name="CaContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```csharp
public string CaContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}.

---

##### `CrlContent`<sup>Optional</sup> <a name="CrlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```csharp
public string CrlContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}.

---

### MailmanagerIngressPointNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfiguration {
    IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration[] PrivateNetworkConfiguration = null,
    IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration[] PublicNetworkConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">PrivateNetworkConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]</code> | private_network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">PublicNetworkConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]</code> | public_network_configuration block. |

---

##### `PrivateNetworkConfiguration`<sup>Optional</sup> <a name="PrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration[] PrivateNetworkConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]

private_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#private_network_configuration MailmanagerIngressPoint#private_network_configuration}

---

##### `PublicNetworkConfiguration`<sup>Optional</sup> <a name="PublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration[] PublicNetworkConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]

public_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#public_network_configuration MailmanagerIngressPoint#public_network_configuration}

---

### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration {
    string VpcEndpointId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}. |

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}.

---

### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration {
    string IpType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">IpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}. |

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```csharp
public string IpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}.

---

### MailmanagerIngressPointTimeouts <a name="MailmanagerIngressPointTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#create MailmanagerIngressPoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#delete MailmanagerIngressPoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_ingress_point#update MailmanagerIngressPoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerIngressPointIngressPointConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get"></a>

```csharp
private MailmanagerIngressPointIngressPointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>[]

---


### MailmanagerIngressPointIngressPointConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">PutTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo">ResetSmtpPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion">ResetSmtpPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">ResetTlsAuthConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTlsAuthConfiguration` <a name="PutTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```csharp
private void PutTlsAuthConfiguration(IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]

---

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetSmtpPasswordWo` <a name="ResetSmtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo"></a>

```csharp
private void ResetSmtpPasswordWo()
```

##### `ResetSmtpPasswordWoVersion` <a name="ResetSmtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion"></a>

```csharp
private void ResetSmtpPasswordWoVersion()
```

##### `ResetTlsAuthConfiguration` <a name="ResetTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```csharp
private void ResetTlsAuthConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">TlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput">SmtpPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput">SmtpPasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">TlsAuthConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo">SmtpPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion">SmtpPasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TlsAuthConfiguration`<sup>Required</sup> <a name="TlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```csharp
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList TlsAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a>

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SmtpPasswordWoInput`<sup>Optional</sup> <a name="SmtpPasswordWoInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput"></a>

```csharp
public string SmtpPasswordWoInput { get; }
```

- *Type:* string

---

##### `SmtpPasswordWoVersionInput`<sup>Optional</sup> <a name="SmtpPasswordWoVersionInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput"></a>

```csharp
public double SmtpPasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `TlsAuthConfigurationInput`<sup>Optional</sup> <a name="TlsAuthConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration[] TlsAuthConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### ~~`SmtpPasswordWo`~~<sup>Required</sup> <a name="SmtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string SmtpPasswordWo { get; }
```

- *Type:* string

---

##### `SmtpPasswordWoVersion`<sup>Required</sup> <a name="SmtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion"></a>

```csharp
public double SmtpPasswordWoVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get"></a>

```csharp
private MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>[]

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">PutTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">ResetTrustStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrustStore` <a name="PutTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```csharp
private void PutTrustStore(IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]

---

##### `ResetTrustStore` <a name="ResetTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```csharp
private void ResetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">TrustStore</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">TrustStoreInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```csharp
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList TrustStore { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a>

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore[] TrustStoreInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get"></a>

```csharp
private MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>[]

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">ResetCrlContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrlContent` <a name="ResetCrlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```csharp
private void ResetCrlContent()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">CaContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">CrlContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">CaContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">CrlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaContentInput`<sup>Optional</sup> <a name="CaContentInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```csharp
public string CaContentInput { get; }
```

- *Type:* string

---

##### `CrlContentInput`<sup>Optional</sup> <a name="CrlContentInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```csharp
public string CrlContentInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `CaContent`<sup>Required</sup> <a name="CaContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```csharp
public string CaContent { get; }
```

- *Type:* string

---

##### `CrlContent`<sup>Required</sup> <a name="CrlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```csharp
public string CrlContent { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### MailmanagerIngressPointNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get"></a>

```csharp
private MailmanagerIngressPointNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>[]

---


### MailmanagerIngressPointNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">PutPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">PutPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">ResetPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">ResetPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateNetworkConfiguration` <a name="PutPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```csharp
private void PutPrivateNetworkConfiguration(IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]

---

##### `PutPublicNetworkConfiguration` <a name="PutPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```csharp
private void PutPublicNetworkConfiguration(IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]

---

##### `ResetPrivateNetworkConfiguration` <a name="ResetPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```csharp
private void ResetPrivateNetworkConfiguration()
```

##### `ResetPublicNetworkConfiguration` <a name="ResetPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```csharp
private void ResetPublicNetworkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">PrivateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">PublicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">PrivateNetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">PublicNetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateNetworkConfiguration`<sup>Required</sup> <a name="PrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```csharp
public MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList PrivateNetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a>

---

##### `PublicNetworkConfiguration`<sup>Required</sup> <a name="PublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```csharp
public MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList PublicNetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a>

---

##### `PrivateNetworkConfigurationInput`<sup>Optional</sup> <a name="PrivateNetworkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration[] PrivateNetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]

---

##### `PublicNetworkConfigurationInput`<sup>Optional</sup> <a name="PublicNetworkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration[] PublicNetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get"></a>

```csharp
private MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>[]

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get"></a>

```csharp
private MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>[]

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">IpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">IpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpTypeInput`<sup>Optional</sup> <a name="IpTypeInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```csharp
public string IpTypeInput { get; }
```

- *Type:* string

---

##### `IpType`<sup>Required</sup> <a name="IpType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```csharp
public string IpType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### MailmanagerIngressPointTimeoutsOutputReference <a name="MailmanagerIngressPointTimeoutsOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new MailmanagerIngressPointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MailmanagerIngressPointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---



