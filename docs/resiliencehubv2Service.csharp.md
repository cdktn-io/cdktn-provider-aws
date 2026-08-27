# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-aws.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service aws_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2Service(Construct Scope, string Id, Resiliencehubv2ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem">PutAssociatedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">PutPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystem">ResetAssociatedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">ResetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedSystem` <a name="PutAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem"></a>

```csharp
private void PutAssociatedSystem(IResolvable|Resiliencehubv2ServiceAssociatedSystem[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---

##### `PutPermissionModel` <a name="PutPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```csharp
private void PutPermissionModel(IResolvable|Resiliencehubv2ServicePermissionModel[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---

##### `ResetAssociatedSystem` <a name="ResetAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystem"></a>

```csharp
private void ResetAssociatedSystem()
```

##### `ResetDependencyDiscovery` <a name="ResetDependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```csharp
private void ResetDependencyDiscovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```csharp
private void ResetPermissionModel()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```csharp
private void ResetPolicyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Resiliencehubv2Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Resiliencehubv2Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Resiliencehubv2Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Resiliencehubv2Service.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystem">AssociatedSystem</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList">Resiliencehubv2ServiceAssociatedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemInput">AssociatedSystemInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">DependencyDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">PermissionModelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociatedSystem`<sup>Required</sup> <a name="AssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystem"></a>

```csharp
public Resiliencehubv2ServiceAssociatedSystemList AssociatedSystem { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList">Resiliencehubv2ServiceAssociatedSystemList</a>

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```csharp
public Resiliencehubv2ServicePermissionModelList PermissionModel { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AssociatedSystemInput`<sup>Optional</sup> <a name="AssociatedSystemInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystem[] AssociatedSystemInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---

##### `DependencyDiscoveryInput`<sup>Optional</sup> <a name="DependencyDiscoveryInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```csharp
public string DependencyDiscoveryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel[] PermissionModelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DependencyDiscovery`<sup>Required</sup> <a name="DependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```csharp
public string DependencyDiscovery { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssociatedSystem <a name="Resiliencehubv2ServiceAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServiceAssociatedSystem {
    string SystemArn,
    string[] UserJourneyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.systemArn">SystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.userJourneyIds">UserJourneyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}. |

---

##### `SystemArn`<sup>Required</sup> <a name="SystemArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.systemArn"></a>

```csharp
public string SystemArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}.

---

##### `UserJourneyIds`<sup>Optional</sup> <a name="UserJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.userJourneyIds"></a>

```csharp
public string[] UserJourneyIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}.

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] Regions,
    IResolvable|Resiliencehubv2ServiceAssociatedSystem[] AssociatedSystem = null,
    string DependencyDiscovery = null,
    string Description = null,
    string KmsKeyId = null,
    IResolvable|Resiliencehubv2ServicePermissionModel[] PermissionModel = null,
    string PolicyArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystem">AssociatedSystem</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | associated_system block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">PermissionModel</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | permission_model block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">PolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}.

---

##### `AssociatedSystem`<sup>Optional</sup> <a name="AssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystem"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystem[] AssociatedSystem { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

associated_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#associated_system Resiliencehubv2Service#associated_system}

---

##### `DependencyDiscovery`<sup>Optional</sup> <a name="DependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```csharp
public string DependencyDiscovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}.

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel[] PermissionModel { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

permission_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#region Resiliencehubv2Service#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}.

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModel {
    string InvokerRoleName,
    IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole[] CrossAccountRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole">CrossAccountRole</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | cross_account_role block. |

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}.

---

##### `CrossAccountRole`<sup>Optional</sup> <a name="CrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole[] CrossAccountRole { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

cross_account_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#cross_account_role Resiliencehubv2Service#cross_account_role}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRole <a name="Resiliencehubv2ServicePermissionModelCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModelCrossAccountRole {
    string CrossAccountRoleArn,
    string ExternalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}. |

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn"></a>

```csharp
public string CrossAccountRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssociatedSystemList <a name="Resiliencehubv2ServiceAssociatedSystemList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServiceAssociatedSystemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get"></a>

```csharp
private Resiliencehubv2ServiceAssociatedSystemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystem[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---


### Resiliencehubv2ServiceAssociatedSystemOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServiceAssociatedSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resetUserJourneyIds">ResetUserJourneyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserJourneyIds` <a name="ResetUserJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resetUserJourneyIds"></a>

```csharp
private void ResetUserJourneyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArnInput">SystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIdsInput">UserJourneyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn">SystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIds">UserJourneyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemArnInput`<sup>Optional</sup> <a name="SystemArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArnInput"></a>

```csharp
public string SystemArnInput { get; }
```

- *Type:* string

---

##### `UserJourneyIdsInput`<sup>Optional</sup> <a name="UserJourneyIdsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIdsInput"></a>

```csharp
public string[] UserJourneyIdsInput { get; }
```

- *Type:* string[]

---

##### `SystemArn`<sup>Required</sup> <a name="SystemArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn"></a>

```csharp
public string SystemArn { get; }
```

- *Type:* string

---

##### `UserJourneyIds`<sup>Required</sup> <a name="UserJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIds"></a>

```csharp
public string[] UserJourneyIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystem InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get"></a>

```csharp
private Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput">CrossAccountRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArnInput`<sup>Optional</sup> <a name="CrossAccountRoleArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput"></a>

```csharp
public string CrossAccountRoleArnInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn"></a>

```csharp
public string CrossAccountRoleArn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>

---


### Resiliencehubv2ServicePermissionModelList <a name="Resiliencehubv2ServicePermissionModelList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get"></a>

```csharp
private Resiliencehubv2ServicePermissionModelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Resiliencehubv2ServicePermissionModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole">PutCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole">ResetCrossAccountRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRole` <a name="PutCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole"></a>

```csharp
private void PutCrossAccountRole(IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---

##### `ResetCrossAccountRole` <a name="ResetCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole"></a>

```csharp
private void ResetCrossAccountRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole">CrossAccountRole</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput">CrossAccountRoleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">InvokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRole`<sup>Required</sup> <a name="CrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole"></a>

```csharp
public Resiliencehubv2ServicePermissionModelCrossAccountRoleList CrossAccountRole { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a>

---

##### `CrossAccountRoleInput`<sup>Optional</sup> <a name="CrossAccountRoleInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRole[] CrossAccountRoleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---

##### `InvokerRoleNameInput`<sup>Optional</sup> <a name="InvokerRoleNameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```csharp
public string InvokerRoleNameInput { get; }
```

- *Type:* string

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---



