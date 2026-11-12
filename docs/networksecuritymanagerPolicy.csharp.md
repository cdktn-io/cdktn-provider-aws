# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-aws.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy aws_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicy(Construct Scope, string Id, NetworksecuritymanagerPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule">PutTemplateOrRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished">ResetIsPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule">ResetTemplateOrRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration"></a>

```csharp
private void PutConfiguration(IResolvable|NetworksecuritymanagerPolicyConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]

---

##### `PutTemplateOrRule` <a name="PutTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule"></a>

```csharp
private void PutTemplateOrRule(IResolvable|NetworksecuritymanagerPolicyTemplateOrRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIsPublished` <a name="ResetIsPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished"></a>

```csharp
private void ResetIsPublished()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateOrRule` <a name="ResetTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule"></a>

```csharp
private void ResetTemplateOrRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

NetworksecuritymanagerPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule">TemplateOrRule</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput">IsPublishedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput">TemplateOrRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">FirewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished">IsPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration"></a>

```csharp
public NetworksecuritymanagerPolicyConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TemplateOrRule`<sup>Required</sup> <a name="TemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule"></a>

```csharp
public NetworksecuritymanagerPolicyTemplateOrRuleList TemplateOrRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfiguration[] ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```csharp
public string FirewallTypeInput { get; }
```

- *Type:* string

---

##### `IsPublishedInput`<sup>Optional</sup> <a name="IsPublishedInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput"></a>

```csharp
public bool|IResolvable IsPublishedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateOrRuleInput`<sup>Optional</sup> <a name="TemplateOrRuleInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTemplateOrRule[] TemplateOrRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```csharp
public string FirewallType { get; }
```

- *Type:* string

---

##### `IsPublished`<sup>Required</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished"></a>

```csharp
public bool|IResolvable IsPublished { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FirewallType,
    string Name,
    double Priority,
    IResolvable|NetworksecuritymanagerPolicyConfiguration[] Configuration = null,
    string Description = null,
    bool|IResolvable IsPublished = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IResolvable|NetworksecuritymanagerPolicyTemplateOrRule[] TemplateOrRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">FirewallType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration">Configuration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]</code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished">IsPublished</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule">TemplateOrRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]</code> | template_or_rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```csharp
public string FirewallType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfiguration[] Configuration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}.

---

##### `IsPublished`<sup>Optional</sup> <a name="IsPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished"></a>

```csharp
public bool|IResolvable IsPublished { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}.

---

##### `TemplateOrRule`<sup>Optional</sup> <a name="TemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTemplateOrRule[] TemplateOrRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]

template_or_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}

---

### NetworksecuritymanagerPolicyConfiguration <a name="NetworksecuritymanagerPolicyConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfiguration {
    bool|IResolvable RemediationEnabled,
    bool|IResolvable ResourcesCleanUp,
    IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig[] WafConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled">RemediationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig">WafConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]</code> | waf_config block. |

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled"></a>

```csharp
public bool|IResolvable RemediationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}.

---

##### `ResourcesCleanUp`<sup>Required</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp"></a>

```csharp
public bool|IResolvable ResourcesCleanUp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}.

---

##### `WafConfig`<sup>Optional</sup> <a name="WafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig[] WafConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]

waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyConfigurationWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfigurationWafConfig {
    string ConflictResolution,
    string ExistingCustomerWebAclResolution
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution">ConflictResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}. |

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution"></a>

```csharp
public string ConflictResolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}.

---

##### `ExistingCustomerWebAclResolution`<sup>Required</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```csharp
public string ExistingCustomerWebAclResolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}.

---

### NetworksecuritymanagerPolicyTemplateOrRule <a name="NetworksecuritymanagerPolicyTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyTemplateOrRule {
    string RuleIdentifier = null,
    string TemplateIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier">TemplateIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}. |

---

##### `RuleIdentifier`<sup>Optional</sup> <a name="RuleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}.

---

##### `TemplateIdentifier`<sup>Optional</sup> <a name="TemplateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier"></a>

```csharp
public string TemplateIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyConfigurationList <a name="NetworksecuritymanagerPolicyConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get"></a>

```csharp
private NetworksecuritymanagerPolicyConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>[]

---


### NetworksecuritymanagerPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig">PutWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig">ResetWafConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWafConfig` <a name="PutWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig"></a>

```csharp
private void PutWafConfig(IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]

---

##### `ResetWafConfig` <a name="ResetWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig"></a>

```csharp
private void ResetWafConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput">RemediationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput">ResourcesCleanUpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput">WafConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled">RemediationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig"></a>

```csharp
public NetworksecuritymanagerPolicyConfigurationWafConfigList WafConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a>

---

##### `RemediationEnabledInput`<sup>Optional</sup> <a name="RemediationEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```csharp
public bool|IResolvable RemediationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcesCleanUpInput`<sup>Optional</sup> <a name="ResourcesCleanUpInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```csharp
public bool|IResolvable ResourcesCleanUpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WafConfigInput`<sup>Optional</sup> <a name="WafConfigInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig[] WafConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```csharp
public bool|IResolvable RemediationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcesCleanUp`<sup>Required</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```csharp
public bool|IResolvable ResourcesCleanUp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyConfigurationWafConfigList <a name="NetworksecuritymanagerPolicyConfigurationWafConfigList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfigurationWafConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get"></a>

```csharp
private NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>[]

---


### NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">ConflictResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">ExistingCustomerWebAclResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictResolutionInput`<sup>Optional</sup> <a name="ConflictResolutionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```csharp
public string ConflictResolutionInput { get; }
```

- *Type:* string

---

##### `ExistingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="ExistingCustomerWebAclResolutionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```csharp
public string ExistingCustomerWebAclResolutionInput { get; }
```

- *Type:* string

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```csharp
public string ConflictResolution { get; }
```

- *Type:* string

---

##### `ExistingCustomerWebAclResolution`<sup>Required</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```csharp
public string ExistingCustomerWebAclResolution { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTemplateOrRuleList <a name="NetworksecuritymanagerPolicyTemplateOrRuleList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyTemplateOrRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get"></a>

```csharp
private NetworksecuritymanagerPolicyTemplateOrRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTemplateOrRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>[]

---


### NetworksecuritymanagerPolicyTemplateOrRuleOutputReference <a name="NetworksecuritymanagerPolicyTemplateOrRuleOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new NetworksecuritymanagerPolicyTemplateOrRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier">ResetRuleIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier">ResetTemplateIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleIdentifier` <a name="ResetRuleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier"></a>

```csharp
private void ResetRuleIdentifier()
```

##### `ResetTemplateIdentifier` <a name="ResetTemplateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier"></a>

```csharp
private void ResetTemplateIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput">RuleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput">TemplateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier">TemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleIdentifierInput`<sup>Optional</sup> <a name="RuleIdentifierInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput"></a>

```csharp
public string RuleIdentifierInput { get; }
```

- *Type:* string

---

##### `TemplateIdentifierInput`<sup>Optional</sup> <a name="TemplateIdentifierInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput"></a>

```csharp
public string TemplateIdentifierInput { get; }
```

- *Type:* string

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; }
```

- *Type:* string

---

##### `TemplateIdentifier`<sup>Required</sup> <a name="TemplateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier"></a>

```csharp
public string TemplateIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworksecuritymanagerPolicyTemplateOrRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>

---



