# `securitylakeSubscriber` Submodule <a name="`securitylakeSubscriber` Submodule" id="@cdktn/provider-aws.securitylakeSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriber <a name="SecuritylakeSubscriber" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriber(Construct Scope, string Id, SecuritylakeSubscriberConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig">SecuritylakeSubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity">PutSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription">ResetSubscriberDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity">ResetSubscriberIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName">ResetSubscriberName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource"></a>

```csharp
private void PutSource(IResolvable|SecuritylakeSubscriberSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---

##### `PutSubscriberIdentity` <a name="PutSubscriberIdentity" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity"></a>

```csharp
private void PutSubscriberIdentity(IResolvable|SecuritylakeSubscriberSubscriberIdentity[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts"></a>

```csharp
private void PutTimeouts(SecuritylakeSubscriberTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSubscriberDescription` <a name="ResetSubscriberDescription" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription"></a>

```csharp
private void ResetSubscriberDescription()
```

##### `ResetSubscriberIdentity` <a name="ResetSubscriberIdentity" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity"></a>

```csharp
private void ResetSubscriberIdentity()
```

##### `ResetSubscriberName` <a name="ResetSubscriberName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName"></a>

```csharp
private void ResetSubscriberName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeSubscriber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecuritylakeSubscriber.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecuritylakeSubscriber.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecuritylakeSubscriber.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecuritylakeSubscriber.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecuritylakeSubscriber resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeSubscriber to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeSubscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn">ResourceShareArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName">ResourceShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source">Source</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity">SubscriberIdentity</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus">SubscriberStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput">SubscriberDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput">SubscriberIdentityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput">SubscriberNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription">SubscriberDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName">SubscriberName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn"></a>

```csharp
public string ResourceShareArn { get; }
```

- *Type:* string

---

##### `ResourceShareName`<sup>Required</sup> <a name="ResourceShareName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName"></a>

```csharp
public string ResourceShareName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source"></a>

```csharp
public SecuritylakeSubscriberSourceList Source { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a>

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint"></a>

```csharp
public string SubscriberEndpoint { get; }
```

- *Type:* string

---

##### `SubscriberIdentity`<sup>Required</sup> <a name="SubscriberIdentity" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity"></a>

```csharp
public SecuritylakeSubscriberSubscriberIdentityList SubscriberIdentity { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a>

---

##### `SubscriberStatus`<sup>Required</sup> <a name="SubscriberStatus" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus"></a>

```csharp
public string SubscriberStatus { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts"></a>

```csharp
public SecuritylakeSubscriberTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSource[] SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---

##### `SubscriberDescriptionInput`<sup>Optional</sup> <a name="SubscriberDescriptionInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput"></a>

```csharp
public string SubscriberDescriptionInput { get; }
```

- *Type:* string

---

##### `SubscriberIdentityInput`<sup>Optional</sup> <a name="SubscriberIdentityInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSubscriberIdentity[] SubscriberIdentityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---

##### `SubscriberNameInput`<sup>Optional</sup> <a name="SubscriberNameInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput"></a>

```csharp
public string SubscriberNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SubscriberDescription`<sup>Required</sup> <a name="SubscriberDescription" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription"></a>

```csharp
public string SubscriberDescription { get; }
```

- *Type:* string

---

##### `SubscriberName`<sup>Required</sup> <a name="SubscriberName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName"></a>

```csharp
public string SubscriberName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberConfig <a name="SecuritylakeSubscriberConfig" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessType = null,
    string Region = null,
    IResolvable|SecuritylakeSubscriberSource[] Source = null,
    string SubscriberDescription = null,
    IResolvable|SecuritylakeSubscriberSubscriberIdentity[] SubscriberIdentity = null,
    string SubscriberName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SecuritylakeSubscriberTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType">AccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source">Source</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | source block. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription">SubscriberDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity">SubscriberIdentity</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | subscriber_identity block. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName">SubscriberName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#region SecuritylakeSubscriber#region}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSource[] Source { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `SubscriberDescription`<sup>Optional</sup> <a name="SubscriberDescription" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription"></a>

```csharp
public string SubscriberDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `SubscriberIdentity`<sup>Optional</sup> <a name="SubscriberIdentity" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSubscriberIdentity[] SubscriberIdentity { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `SubscriberName`<sup>Optional</sup> <a name="SubscriberName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName"></a>

```csharp
public string SubscriberName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts"></a>

```csharp
public SecuritylakeSubscriberTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

### SecuritylakeSubscriberSource <a name="SecuritylakeSubscriberSource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSource {
    IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource[] AwsLogSourceResource = null,
    IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource[] CustomLogSourceResource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource">AwsLogSourceResource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | aws_log_source_resource block. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource">CustomLogSourceResource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | custom_log_source_resource block. |

---

##### `AwsLogSourceResource`<sup>Optional</sup> <a name="AwsLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource[] AwsLogSourceResource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

aws_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}

---

##### `CustomLogSourceResource`<sup>Optional</sup> <a name="CustomLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource[] CustomLogSourceResource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

custom_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}

---

### SecuritylakeSubscriberSourceAwsLogSourceResource <a name="SecuritylakeSubscriberSourceAwsLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceAwsLogSourceResource {
    string SourceName,
    string SourceVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResource <a name="SecuritylakeSubscriberSourceCustomLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResource {
    string SourceName,
    string SourceVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes {

};
```


### SecuritylakeSubscriberSourceCustomLogSourceResourceProvider <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProvider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceProvider {

};
```


### SecuritylakeSubscriberSubscriberIdentity <a name="SecuritylakeSubscriberSubscriberIdentity" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSubscriberIdentity {
    string ExternalId,
    string Principal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}.

---

### SecuritylakeSubscriberTimeouts <a name="SecuritylakeSubscriberTimeouts" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberSourceAwsLogSourceResourceList <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceAwsLogSourceResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get"></a>

```csharp
private SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---


### SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion"></a>

```csharp
private void ResetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```csharp
public string SourceVersionInput { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get"></a>

```csharp
private SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn">CrawlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerArn`<sup>Required</sup> <a name="CrawlerArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn"></a>

```csharp
public string CrawlerArn { get; }
```

- *Type:* string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn"></a>

```csharp
public string DatabaseArn { get; }
```

- *Type:* string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue"></a>

```csharp
public SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get"></a>

```csharp
private SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion"></a>

```csharp
private void ResetSourceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput">SourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes"></a>

```csharp
public SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a>

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider"></a>

```csharp
public SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList Provider { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a>

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```csharp
public string SourceVersionInput { get; }
```

- *Type:* string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get"></a>

```csharp
private SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue"></a>

```csharp
public SecuritylakeSubscriberSourceCustomLogSourceResourceProvider InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a>

---


### SecuritylakeSubscriberSourceList <a name="SecuritylakeSubscriberSourceList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get"></a>

```csharp
private SecuritylakeSubscriberSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>[]

---


### SecuritylakeSubscriberSourceOutputReference <a name="SecuritylakeSubscriberSourceOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource">PutAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource">PutCustomLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource">ResetAwsLogSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource">ResetCustomLogSourceResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLogSourceResource` <a name="PutAwsLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource"></a>

```csharp
private void PutAwsLogSourceResource(IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---

##### `PutCustomLogSourceResource` <a name="PutCustomLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource"></a>

```csharp
private void PutCustomLogSourceResource(IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---

##### `ResetAwsLogSourceResource` <a name="ResetAwsLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource"></a>

```csharp
private void ResetAwsLogSourceResource()
```

##### `ResetCustomLogSourceResource` <a name="ResetCustomLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource"></a>

```csharp
private void ResetCustomLogSourceResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource">AwsLogSourceResource</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource">CustomLogSourceResource</a></code> | <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput">AwsLogSourceResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput">CustomLogSourceResourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsLogSourceResource`<sup>Required</sup> <a name="AwsLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource"></a>

```csharp
public SecuritylakeSubscriberSourceAwsLogSourceResourceList AwsLogSourceResource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a>

---

##### `CustomLogSourceResource`<sup>Required</sup> <a name="CustomLogSourceResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource"></a>

```csharp
public SecuritylakeSubscriberSourceCustomLogSourceResourceList CustomLogSourceResource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a>

---

##### `AwsLogSourceResourceInput`<sup>Optional</sup> <a name="AwsLogSourceResourceInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceAwsLogSourceResource[] AwsLogSourceResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>[]

---

##### `CustomLogSourceResourceInput`<sup>Optional</sup> <a name="CustomLogSourceResourceInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSourceCustomLogSourceResource[] CustomLogSourceResourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>

---


### SecuritylakeSubscriberSubscriberIdentityList <a name="SecuritylakeSubscriberSubscriberIdentityList" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSubscriberIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get"></a>

```csharp
private SecuritylakeSubscriberSubscriberIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSubscriberIdentity[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>[]

---


### SecuritylakeSubscriberSubscriberIdentityOutputReference <a name="SecuritylakeSubscriberSubscriberIdentityOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberSubscriberIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberSubscriberIdentity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>

---


### SecuritylakeSubscriberTimeoutsOutputReference <a name="SecuritylakeSubscriberTimeoutsOutputReference" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecuritylakeSubscriberTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecuritylakeSubscriberTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

---



