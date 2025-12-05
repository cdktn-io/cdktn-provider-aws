# `vpcEncryptionControl` Submodule <a name="`vpcEncryptionControl` Submodule" id="@cdktf/provider-aws.vpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEncryptionControl <a name="VpcEncryptionControl" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control aws_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControl(Construct Scope, string Id, VpcEncryptionControlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig">VpcEncryptionControlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig">VpcEncryptionControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion">ResetEgressOnlyInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion">ResetElasticFileSystemExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion">ResetInternetGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion">ResetLambdaExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion">ResetNatGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion">ResetVirtualPrivateGatewayExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion">ResetVpcLatticeExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion">ResetVpcPeeringExclusion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcEncryptionControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---

##### `ResetEgressOnlyInternetGatewayExclusion` <a name="ResetEgressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusion"></a>

```csharp
private void ResetEgressOnlyInternetGatewayExclusion()
```

##### `ResetElasticFileSystemExclusion` <a name="ResetElasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetElasticFileSystemExclusion"></a>

```csharp
private void ResetElasticFileSystemExclusion()
```

##### `ResetInternetGatewayExclusion` <a name="ResetInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetInternetGatewayExclusion"></a>

```csharp
private void ResetInternetGatewayExclusion()
```

##### `ResetLambdaExclusion` <a name="ResetLambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetLambdaExclusion"></a>

```csharp
private void ResetLambdaExclusion()
```

##### `ResetNatGatewayExclusion` <a name="ResetNatGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetNatGatewayExclusion"></a>

```csharp
private void ResetNatGatewayExclusion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualPrivateGatewayExclusion` <a name="ResetVirtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVirtualPrivateGatewayExclusion"></a>

```csharp
private void ResetVirtualPrivateGatewayExclusion()
```

##### `ResetVpcLatticeExclusion` <a name="ResetVpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcLatticeExclusion"></a>

```csharp
private void ResetVpcLatticeExclusion()
```

##### `ResetVpcPeeringExclusion` <a name="ResetVpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.resetVpcPeeringExclusion"></a>

```csharp
private void ResetVpcPeeringExclusion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEncryptionControl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEncryptionControl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEncryptionControl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEncryptionControl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpcEncryptionControl resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcEncryptionControl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions">ResourceExclusions</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">EgressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput">ElasticFileSystemExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput">InternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput">LambdaExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput">NatGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">VirtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput">VpcLatticeExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput">VpcPeeringExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion">EgressOnlyInternetGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion">ElasticFileSystemExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion">InternetGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion">LambdaExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion">NatGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion">VirtualPrivateGatewayExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion">VpcLatticeExclusion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion">VpcPeeringExclusion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceExclusions`<sup>Required</sup> <a name="ResourceExclusions" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.resourceExclusions"></a>

```csharp
public VpcEncryptionControlResourceExclusionsOutputReference ResourceExclusions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference">VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeouts"></a>

```csharp
public VpcEncryptionControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference">VpcEncryptionControlTimeoutsOutputReference</a>

---

##### `EgressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```csharp
public string EgressOnlyInternetGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `ElasticFileSystemExclusionInput`<sup>Optional</sup> <a name="ElasticFileSystemExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```csharp
public string ElasticFileSystemExclusionInput { get; }
```

- *Type:* string

---

##### `InternetGatewayExclusionInput`<sup>Optional</sup> <a name="InternetGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```csharp
public string InternetGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `LambdaExclusionInput`<sup>Optional</sup> <a name="LambdaExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusionInput"></a>

```csharp
public string LambdaExclusionInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NatGatewayExclusionInput`<sup>Optional</sup> <a name="NatGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```csharp
public string NatGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.timeoutsInput"></a>

```csharp
public IResolvable|VpcEncryptionControlTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---

##### `VirtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```csharp
public string VirtualPrivateGatewayExclusionInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `VpcLatticeExclusionInput`<sup>Optional</sup> <a name="VpcLatticeExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```csharp
public string VpcLatticeExclusionInput { get; }
```

- *Type:* string

---

##### `VpcPeeringExclusionInput`<sup>Optional</sup> <a name="VpcPeeringExclusionInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```csharp
public string VpcPeeringExclusionInput { get; }
```

- *Type:* string

---

##### `EgressOnlyInternetGatewayExclusion`<sup>Required</sup> <a name="EgressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.egressOnlyInternetGatewayExclusion"></a>

```csharp
public string EgressOnlyInternetGatewayExclusion { get; }
```

- *Type:* string

---

##### `ElasticFileSystemExclusion`<sup>Required</sup> <a name="ElasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.elasticFileSystemExclusion"></a>

```csharp
public string ElasticFileSystemExclusion { get; }
```

- *Type:* string

---

##### `InternetGatewayExclusion`<sup>Required</sup> <a name="InternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.internetGatewayExclusion"></a>

```csharp
public string InternetGatewayExclusion { get; }
```

- *Type:* string

---

##### `LambdaExclusion`<sup>Required</sup> <a name="LambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.lambdaExclusion"></a>

```csharp
public string LambdaExclusion { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `NatGatewayExclusion`<sup>Required</sup> <a name="NatGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.natGatewayExclusion"></a>

```csharp
public string NatGatewayExclusion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualPrivateGatewayExclusion`<sup>Required</sup> <a name="VirtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.virtualPrivateGatewayExclusion"></a>

```csharp
public string VirtualPrivateGatewayExclusion { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcLatticeExclusion`<sup>Required</sup> <a name="VpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcLatticeExclusion"></a>

```csharp
public string VpcLatticeExclusion { get; }
```

- *Type:* string

---

##### `VpcPeeringExclusion`<sup>Required</sup> <a name="VpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.vpcPeeringExclusion"></a>

```csharp
public string VpcPeeringExclusion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEncryptionControlConfig <a name="VpcEncryptionControlConfig" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mode,
    string VpcId,
    string EgressOnlyInternetGatewayExclusion = null,
    string ElasticFileSystemExclusion = null,
    string InternetGatewayExclusion = null,
    string LambdaExclusion = null,
    string NatGatewayExclusion = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VpcEncryptionControlTimeouts Timeouts = null,
    string VirtualPrivateGatewayExclusion = null,
    string VpcLatticeExclusion = null,
    string VpcPeeringExclusion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion">EgressOnlyInternetGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion">ElasticFileSystemExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion">InternetGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion">LambdaExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion">NatGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion">VirtualPrivateGatewayExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion">VpcLatticeExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion">VpcPeeringExclusion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#mode VpcEncryptionControl#mode}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_id VpcEncryptionControl#vpc_id}.

---

##### `EgressOnlyInternetGatewayExclusion`<sup>Optional</sup> <a name="EgressOnlyInternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusion"></a>

```csharp
public string EgressOnlyInternetGatewayExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#egress_only_internet_gateway_exclusion VpcEncryptionControl#egress_only_internet_gateway_exclusion}.

---

##### `ElasticFileSystemExclusion`<sup>Optional</sup> <a name="ElasticFileSystemExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.elasticFileSystemExclusion"></a>

```csharp
public string ElasticFileSystemExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#elastic_file_system_exclusion VpcEncryptionControl#elastic_file_system_exclusion}.

---

##### `InternetGatewayExclusion`<sup>Optional</sup> <a name="InternetGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.internetGatewayExclusion"></a>

```csharp
public string InternetGatewayExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#internet_gateway_exclusion VpcEncryptionControl#internet_gateway_exclusion}.

---

##### `LambdaExclusion`<sup>Optional</sup> <a name="LambdaExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.lambdaExclusion"></a>

```csharp
public string LambdaExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#lambda_exclusion VpcEncryptionControl#lambda_exclusion}.

---

##### `NatGatewayExclusion`<sup>Optional</sup> <a name="NatGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.natGatewayExclusion"></a>

```csharp
public string NatGatewayExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#nat_gateway_exclusion VpcEncryptionControl#nat_gateway_exclusion}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#region VpcEncryptionControl#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#tags VpcEncryptionControl#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.timeouts"></a>

```csharp
public VpcEncryptionControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#timeouts VpcEncryptionControl#timeouts}

---

##### `VirtualPrivateGatewayExclusion`<sup>Optional</sup> <a name="VirtualPrivateGatewayExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusion"></a>

```csharp
public string VirtualPrivateGatewayExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#virtual_private_gateway_exclusion VpcEncryptionControl#virtual_private_gateway_exclusion}.

---

##### `VpcLatticeExclusion`<sup>Optional</sup> <a name="VpcLatticeExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcLatticeExclusion"></a>

```csharp
public string VpcLatticeExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_lattice_exclusion VpcEncryptionControl#vpc_lattice_exclusion}.

---

##### `VpcPeeringExclusion`<sup>Optional</sup> <a name="VpcPeeringExclusion" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlConfig.property.vpcPeeringExclusion"></a>

```csharp
public string VpcPeeringExclusion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#vpc_peering_exclusion VpcEncryptionControl#vpc_peering_exclusion}.

---

### VpcEncryptionControlResourceExclusions <a name="VpcEncryptionControlResourceExclusions" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusions {

};
```


### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway {

};
```


### VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsElasticFileSystem {

};
```


### VpcEncryptionControlResourceExclusionsInternetGateway <a name="VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsInternetGateway {

};
```


### VpcEncryptionControlResourceExclusionsLambda <a name="VpcEncryptionControlResourceExclusionsLambda" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsLambda {

};
```


### VpcEncryptionControlResourceExclusionsNatGateway <a name="VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsNatGateway {

};
```


### VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVirtualPrivateGateway {

};
```


### VpcEncryptionControlResourceExclusionsVpcLattice <a name="VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVpcLattice {

};
```


### VpcEncryptionControlResourceExclusionsVpcPeering <a name="VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVpcPeering {

};
```


### VpcEncryptionControlTimeouts <a name="VpcEncryptionControlTimeouts" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#create VpcEncryptionControl#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#delete VpcEncryptionControl#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/vpc_encryption_control#update VpcEncryptionControl#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsElasticFileSystem InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystem">VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGateway">VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambda">VpcEncryptionControlResourceExclusionsLambda</a>

---


### VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsNatGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGateway">VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### VpcEncryptionControlResourceExclusionsOutputReference <a name="VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">EgressOnlyInternetGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">ElasticFileSystem</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">NatGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">VirtualPrivateGateway</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">VpcLattice</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">VpcPeering</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressOnlyInternetGateway`<sup>Required</sup> <a name="EgressOnlyInternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```csharp
public VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference EgressOnlyInternetGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `ElasticFileSystem`<sup>Required</sup> <a name="ElasticFileSystem" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```csharp
public VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference ElasticFileSystem { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```csharp
public VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference InternetGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```csharp
public VpcEncryptionControlResourceExclusionsLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsLambdaOutputReference">VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `NatGateway`<sup>Required</sup> <a name="NatGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```csharp
public VpcEncryptionControlResourceExclusionsNatGatewayOutputReference NatGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `VirtualPrivateGateway`<sup>Required</sup> <a name="VirtualPrivateGateway" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference VirtualPrivateGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `VpcLattice`<sup>Required</sup> <a name="VpcLattice" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference VpcLattice { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `VpcPeering`<sup>Required</sup> <a name="VpcPeering" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference VpcPeering { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusions">VpcEncryptionControlResourceExclusions</a>

---


### VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVirtualPrivateGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVpcLattice InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcLattice">VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```csharp
public VpcEncryptionControlResourceExclusionsVpcPeering InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlResourceExclusionsVpcPeering">VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### VpcEncryptionControlTimeoutsOutputReference <a name="VpcEncryptionControlTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEncryptionControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpcEncryptionControlTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.vpcEncryptionControl.VpcEncryptionControlTimeouts">VpcEncryptionControlTimeouts</a>

---



