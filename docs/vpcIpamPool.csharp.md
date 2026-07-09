# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktn/provider-aws.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPool(Construct Scope, string Id, VpcIpamPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putSourceResource">PutSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">ResetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">ResetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">ResetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">ResetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport">ResetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService">ResetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetCascade">ResetCascade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource">ResetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">ResetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">ResetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceResource">ResetSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceResource` <a name="PutSourceResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putSourceResource"></a>

```csharp
private void PutSourceResource(VpcIpamPoolSourceResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putSourceResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcIpamPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---

##### `ResetAllocationDefaultNetmaskLength` <a name="ResetAllocationDefaultNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```csharp
private void ResetAllocationDefaultNetmaskLength()
```

##### `ResetAllocationMaxNetmaskLength` <a name="ResetAllocationMaxNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```csharp
private void ResetAllocationMaxNetmaskLength()
```

##### `ResetAllocationMinNetmaskLength` <a name="ResetAllocationMinNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```csharp
private void ResetAllocationMinNetmaskLength()
```

##### `ResetAllocationResourceTags` <a name="ResetAllocationResourceTags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```csharp
private void ResetAllocationResourceTags()
```

##### `ResetAutoImport` <a name="ResetAutoImport" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```csharp
private void ResetAutoImport()
```

##### `ResetAwsService` <a name="ResetAwsService" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```csharp
private void ResetAwsService()
```

##### `ResetCascade` <a name="ResetCascade" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetCascade"></a>

```csharp
private void ResetCascade()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetPublicIpSource` <a name="ResetPublicIpSource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource"></a>

```csharp
private void ResetPublicIpSource()
```

##### `ResetPubliclyAdvertisable` <a name="ResetPubliclyAdvertisable" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```csharp
private void ResetPubliclyAdvertisable()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSourceIpamPoolId` <a name="ResetSourceIpamPoolId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```csharp
private void ResetSourceIpamPoolId()
```

##### `ResetSourceResource` <a name="ResetSourceResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceResource"></a>

```csharp
private void ResetSourceResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpcIpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

VpcIpamPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpcIpamPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcIpamPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpcIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType">IpamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth">PoolDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceResource">SourceResource</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference">VpcIpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">AllocationDefaultNetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">AllocationMaxNetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">AllocationMinNetmaskLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">AllocationResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput">AutoImportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput">AwsServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cascadeInput">CascadeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">IpamScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput">PublicIpSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">PubliclyAdvertisableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">SourceIpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceResourceInput">SourceResourceInput</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport">AutoImport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService">AwsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cascade">Cascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId">IpamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource">PublicIpSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IpamScopeType`<sup>Required</sup> <a name="IpamScopeType" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```csharp
public string IpamScopeType { get; }
```

- *Type:* string

---

##### `PoolDepth`<sup>Required</sup> <a name="PoolDepth" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```csharp
public double PoolDepth { get; }
```

- *Type:* double

---

##### `SourceResource`<sup>Required</sup> <a name="SourceResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceResource"></a>

```csharp
public VpcIpamPoolSourceResourceOutputReference SourceResource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference">VpcIpamPoolSourceResourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts"></a>

```csharp
public VpcIpamPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `AllocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLengthInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```csharp
public double AllocationDefaultNetmaskLengthInput { get; }
```

- *Type:* double

---

##### `AllocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMaxNetmaskLengthInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```csharp
public double AllocationMaxNetmaskLengthInput { get; }
```

- *Type:* double

---

##### `AllocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMinNetmaskLengthInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```csharp
public double AllocationMinNetmaskLengthInput { get; }
```

- *Type:* double

---

##### `AllocationResourceTagsInput`<sup>Optional</sup> <a name="AllocationResourceTagsInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoImportInput`<sup>Optional</sup> <a name="AutoImportInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```csharp
public bool|IResolvable AutoImportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsServiceInput`<sup>Optional</sup> <a name="AwsServiceInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```csharp
public string AwsServiceInput { get; }
```

- *Type:* string

---

##### `CascadeInput`<sup>Optional</sup> <a name="CascadeInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cascadeInput"></a>

```csharp
public bool|IResolvable CascadeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamScopeIdInput`<sup>Optional</sup> <a name="IpamScopeIdInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```csharp
public string IpamScopeIdInput { get; }
```

- *Type:* string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `PublicIpSourceInput`<sup>Optional</sup> <a name="PublicIpSourceInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput"></a>

```csharp
public string PublicIpSourceInput { get; }
```

- *Type:* string

---

##### `PubliclyAdvertisableInput`<sup>Optional</sup> <a name="PubliclyAdvertisableInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```csharp
public bool|IResolvable PubliclyAdvertisableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourceIpamPoolIdInput`<sup>Optional</sup> <a name="SourceIpamPoolIdInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```csharp
public string SourceIpamPoolIdInput { get; }
```

- *Type:* string

---

##### `SourceResourceInput`<sup>Optional</sup> <a name="SourceResourceInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceResourceInput"></a>

```csharp
public VpcIpamPoolSourceResource SourceResourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput"></a>

```csharp
public IResolvable|VpcIpamPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AllocationDefaultNetmaskLength`<sup>Required</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```csharp
public double AllocationDefaultNetmaskLength { get; }
```

- *Type:* double

---

##### `AllocationMaxNetmaskLength`<sup>Required</sup> <a name="AllocationMaxNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```csharp
public double AllocationMaxNetmaskLength { get; }
```

- *Type:* double

---

##### `AllocationMinNetmaskLength`<sup>Required</sup> <a name="AllocationMinNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```csharp
public double AllocationMinNetmaskLength { get; }
```

- *Type:* double

---

##### `AllocationResourceTags`<sup>Required</sup> <a name="AllocationResourceTags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AutoImport`<sup>Required</sup> <a name="AutoImport" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```csharp
public bool|IResolvable AutoImport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```csharp
public string AwsService { get; }
```

- *Type:* string

---

##### `Cascade`<sup>Required</sup> <a name="Cascade" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.cascade"></a>

```csharp
public bool|IResolvable Cascade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```csharp
public string IpamScopeId { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `PublicIpSource`<sup>Required</sup> <a name="PublicIpSource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource"></a>

```csharp
public string PublicIpSource { get; }
```

- *Type:* string

---

##### `PubliclyAdvertisable`<sup>Required</sup> <a name="PubliclyAdvertisable" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```csharp
public bool|IResolvable PubliclyAdvertisable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceIpamPoolId`<sup>Required</sup> <a name="SourceIpamPoolId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```csharp
public string SourceIpamPoolId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AddressFamily,
    string IpamScopeId,
    double AllocationDefaultNetmaskLength = null,
    double AllocationMaxNetmaskLength = null,
    double AllocationMinNetmaskLength = null,
    System.Collections.Generic.IDictionary<string, string> AllocationResourceTags = null,
    bool|IResolvable AutoImport = null,
    string AwsService = null,
    bool|IResolvable Cascade = null,
    string Description = null,
    string Id = null,
    string Locale = null,
    string PublicIpSource = null,
    bool|IResolvable PubliclyAdvertisable = null,
    string Region = null,
    string SourceIpamPoolId = null,
    VpcIpamPoolSourceResource SourceResource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpcIpamPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">AddressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">IpamScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">AutoImport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService">AwsService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.cascade">Cascade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#cascade VpcIpamPool#cascade}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource">PublicIpSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceResource">SourceResource</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a></code> | source_resource block. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```csharp
public string IpamScopeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `AllocationDefaultNetmaskLength`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```csharp
public double AllocationDefaultNetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `AllocationMaxNetmaskLength`<sup>Optional</sup> <a name="AllocationMaxNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```csharp
public double AllocationMaxNetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `AllocationMinNetmaskLength`<sup>Optional</sup> <a name="AllocationMinNetmaskLength" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```csharp
public double AllocationMinNetmaskLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `AllocationResourceTags`<sup>Optional</sup> <a name="AllocationResourceTags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `AutoImport`<sup>Optional</sup> <a name="AutoImport" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```csharp
public bool|IResolvable AutoImport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `AwsService`<sup>Optional</sup> <a name="AwsService" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```csharp
public string AwsService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `Cascade`<sup>Optional</sup> <a name="Cascade" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.cascade"></a>

```csharp
public bool|IResolvable Cascade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#cascade VpcIpamPool#cascade}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `PublicIpSource`<sup>Optional</sup> <a name="PublicIpSource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource"></a>

```csharp
public string PublicIpSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `PubliclyAdvertisable`<sup>Optional</sup> <a name="PubliclyAdvertisable" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```csharp
public bool|IResolvable PubliclyAdvertisable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#region VpcIpamPool#region}

---

##### `SourceIpamPoolId`<sup>Optional</sup> <a name="SourceIpamPoolId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```csharp
public string SourceIpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `SourceResource`<sup>Optional</sup> <a name="SourceResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceResource"></a>

```csharp
public VpcIpamPoolSourceResource SourceResource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a>

source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#source_resource VpcIpamPool#source_resource}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts"></a>

```csharp
public VpcIpamPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

### VpcIpamPoolSourceResource <a name="VpcIpamPoolSourceResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolSourceResource {
    string ResourceId,
    string ResourceOwner,
    string ResourceRegion,
    string ResourceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_id VpcIpamPool#resource_id}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_owner VpcIpamPool#resource_owner}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_region VpcIpamPool#resource_region}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_type VpcIpamPool#resource_type}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_id VpcIpamPool#resource_id}.

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_owner VpcIpamPool#resource_owner}.

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_region VpcIpamPool#resource_region}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#resource_type VpcIpamPool#resource_type}.

---

### VpcIpamPoolTimeouts <a name="VpcIpamPoolTimeouts" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#create VpcIpamPool#create}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#delete VpcIpamPool#delete}. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#update VpcIpamPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#create VpcIpamPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/vpc_ipam_pool#update VpcIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolSourceResourceOutputReference <a name="VpcIpamPoolSourceResourceOutputReference" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolSourceResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceOwnerInput">ResourceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceRegionInput">ResourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourceOwnerInput`<sup>Optional</sup> <a name="ResourceOwnerInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceOwnerInput"></a>

```csharp
public string ResourceOwnerInput { get; }
```

- *Type:* string

---

##### `ResourceRegionInput`<sup>Optional</sup> <a name="ResourceRegionInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceRegionInput"></a>

```csharp
public string ResourceRegionInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResourceOutputReference.property.internalValue"></a>

```csharp
public VpcIpamPoolSourceResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolSourceResource">VpcIpamPoolSourceResource</a>

---


### VpcIpamPoolTimeoutsOutputReference <a name="VpcIpamPoolTimeoutsOutputReference" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new VpcIpamPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpcIpamPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---



