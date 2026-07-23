# `vpcIpamPoolCidrAllocation` Submodule <a name="`vpcIpamPoolCidrAllocation` Submodule" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidrAllocation <a name="VpcIpamPoolCidrAllocation" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolCidrAllocation(Construct Scope, string Id, VpcIpamPoolCidrAllocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs">ResetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength">ResetNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisallowedCidrs` <a name="ResetDisallowedCidrs" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs"></a>

```csharp
private void ResetDisallowedCidrs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetmaskLength` <a name="ResetNetmaskLength" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength"></a>

```csharp
private void ResetNetmaskLength()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPoolCidrAllocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPoolCidrAllocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPoolCidrAllocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPoolCidrAllocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcIpamPoolCidrAllocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcIpamPoolCidrAllocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpcIpamPoolCidrAllocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId">IpamPoolAllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput">DisallowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput">NetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpamPoolAllocationId`<sup>Required</sup> <a name="IpamPoolAllocationId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId"></a>

```csharp
public string IpamPoolAllocationId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisallowedCidrsInput`<sup>Optional</sup> <a name="DisallowedCidrsInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput"></a>

```csharp
public string[] DisallowedCidrsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `NetmaskLengthInput`<sup>Optional</sup> <a name="NetmaskLengthInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput"></a>

```csharp
public double NetmaskLengthInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisallowedCidrs`<sup>Required</sup> <a name="DisallowedCidrs" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `NetmaskLength`<sup>Required</sup> <a name="NetmaskLength" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrAllocationConfig <a name="VpcIpamPoolCidrAllocationConfig" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolCidrAllocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpamPoolId,
    string Cidr = null,
    string Description = null,
    string[] DisallowedCidrs = null,
    string Id = null,
    double NetmaskLength = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs">DisallowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength">NetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#tags VpcIpamPoolCidrAllocation#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#tags_all VpcIpamPoolCidrAllocation#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}.

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}.

---

##### `DisallowedCidrs`<sup>Optional</sup> <a name="DisallowedCidrs" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs"></a>

```csharp
public string[] DisallowedCidrs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetmaskLength`<sup>Optional</sup> <a name="NetmaskLength" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength"></a>

```csharp
public double NetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#region VpcIpamPoolCidrAllocation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#tags VpcIpamPoolCidrAllocation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/vpc_ipam_pool_cidr_allocation#tags_all VpcIpamPoolCidrAllocation#tags_all}.

---



