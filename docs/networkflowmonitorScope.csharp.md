# `networkflowmonitorScope` Submodule <a name="`networkflowmonitorScope` Submodule" id="@cdktf/provider-aws.networkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkflowmonitorScope <a name="NetworkflowmonitorScope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope aws_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScope(Construct Scope, string Id, NetworkflowmonitorScopeConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig">NetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget"></a>

```csharp
private void PutTarget(IResolvable|NetworkflowmonitorScopeTarget[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTarget.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkflowmonitorScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkflowmonitorScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkflowmonitorScope resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkflowmonitorScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput">TargetInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeArn"></a>

```csharp
public string ScopeArn { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.target"></a>

```csharp
public NetworkflowmonitorScopeTargetList Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList">NetworkflowmonitorScopeTargetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeouts"></a>

```csharp
public NetworkflowmonitorScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference">NetworkflowmonitorScopeTimeoutsOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.targetInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTarget[] TargetInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorScopeConfig <a name="NetworkflowmonitorScopeConfig" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IResolvable|NetworkflowmonitorScopeTarget[] Target = null,
    NetworkflowmonitorScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target">Target</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | target block. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#tags NetworkflowmonitorScope#tags}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.target"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTarget[] Target { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#target NetworkflowmonitorScope#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeConfig.property.timeouts"></a>

```csharp
public NetworkflowmonitorScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#timeouts NetworkflowmonitorScope#timeouts}

---

### NetworkflowmonitorScopeTarget <a name="NetworkflowmonitorScopeTarget" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTarget {
    string Region,
    IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier[] TargetIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier">TargetIdentifier</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | target_identifier block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#region NetworkflowmonitorScope#region}.

---

##### `TargetIdentifier`<sup>Optional</sup> <a name="TargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget.property.targetIdentifier"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier[] TargetIdentifier { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

target_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#target_identifier NetworkflowmonitorScope#target_identifier}

---

### NetworkflowmonitorScopeTargetTargetIdentifier <a name="NetworkflowmonitorScopeTargetTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifier {
    string TargetType,
    IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId[] TargetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId">TargetId</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | target_id block. |

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#target_type NetworkflowmonitorScope#target_type}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier.property.targetId"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId[] TargetId { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

target_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#target_id NetworkflowmonitorScope#target_id}

---

### NetworkflowmonitorScopeTargetTargetIdentifierTargetId <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifierTargetId {
    string AccountId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#account_id NetworkflowmonitorScope#account_id}.

---

### NetworkflowmonitorScopeTimeouts <a name="NetworkflowmonitorScopeTimeouts" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#create NetworkflowmonitorScope#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#delete NetworkflowmonitorScope#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/resources/networkflowmonitor_scope#update NetworkflowmonitorScope#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorScopeTargetList <a name="NetworkflowmonitorScopeTargetList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get"></a>

```csharp
private NetworkflowmonitorScopeTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTarget[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>[]

---


### NetworkflowmonitorScopeTargetOutputReference <a name="NetworkflowmonitorScopeTargetOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier">PutTargetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier">ResetTargetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetIdentifier` <a name="PutTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier"></a>

```csharp
private void PutTargetIdentifier(IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.putTargetIdentifier.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---

##### `ResetTargetIdentifier` <a name="ResetTargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.resetTargetIdentifier"></a>

```csharp
private void ResetTargetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput">TargetIdentifierInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifier"></a>

```csharp
public NetworkflowmonitorScopeTargetTargetIdentifierList TargetIdentifier { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList">NetworkflowmonitorScopeTargetTargetIdentifierList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TargetIdentifierInput`<sup>Optional</sup> <a name="TargetIdentifierInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.targetIdentifierInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier[] TargetIdentifierInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTarget InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTarget">NetworkflowmonitorScopeTarget</a>

---


### NetworkflowmonitorScopeTargetTargetIdentifierList <a name="NetworkflowmonitorScopeTargetTargetIdentifierList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifierList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get"></a>

```csharp
private NetworkflowmonitorScopeTargetTargetIdentifierOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>[]

---


### NetworkflowmonitorScopeTargetTargetIdentifierOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId">PutTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetId` <a name="PutTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId"></a>

```csharp
private void PutTargetId(IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.putTargetId.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.resetTargetId"></a>

```csharp
private void ResetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetId"></a>

```csharp
public NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList TargetId { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList">NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList</a>

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetIdInput"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId[] TargetIdInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifier InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifier">NetworkflowmonitorScopeTargetTargetIdentifier</a>

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get"></a>

```csharp
private NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdList.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>[]

---


### NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference <a name="NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTargetTargetIdentifierTargetId InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTargetTargetIdentifierTargetId">NetworkflowmonitorScopeTargetTargetIdentifierTargetId</a>

---


### NetworkflowmonitorScopeTimeoutsOutputReference <a name="NetworkflowmonitorScopeTimeoutsOutputReference" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkflowmonitorScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkflowmonitorScopeTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.networkflowmonitorScope.NetworkflowmonitorScopeTimeouts">NetworkflowmonitorScopeTimeouts</a>

---



