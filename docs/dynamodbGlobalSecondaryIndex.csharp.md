# `dynamodbGlobalSecondaryIndex` Submodule <a name="`dynamodbGlobalSecondaryIndex` Submodule" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbGlobalSecondaryIndex <a name="DynamodbGlobalSecondaryIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index aws_dynamodb_global_secondary_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndex(Construct Scope, string Id, DynamodbGlobalSecondaryIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig">DynamodbGlobalSecondaryIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig">DynamodbGlobalSecondaryIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema">PutKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput">PutOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection">PutProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput">PutWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetKeySchema">ResetKeySchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOnDemandThroughput">ResetOnDemandThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProjection">ResetProjection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetWarmThroughput">ResetWarmThroughput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeySchema` <a name="PutKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema"></a>

```csharp
private void PutKeySchema(IResolvable|DynamodbGlobalSecondaryIndexKeySchema[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putKeySchema.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---

##### `PutOnDemandThroughput` <a name="PutOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput"></a>

```csharp
private void PutOnDemandThroughput(IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putOnDemandThroughput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---

##### `PutProjection` <a name="PutProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection"></a>

```csharp
private void PutProjection(IResolvable|DynamodbGlobalSecondaryIndexProjection[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProjection.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput"></a>

```csharp
private void PutProvisionedThroughput(IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putProvisionedThroughput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(DynamodbGlobalSecondaryIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---

##### `PutWarmThroughput` <a name="PutWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput"></a>

```csharp
private void PutWarmThroughput(DynamodbGlobalSecondaryIndexWarmThroughput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---

##### `ResetKeySchema` <a name="ResetKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetKeySchema"></a>

```csharp
private void ResetKeySchema()
```

##### `ResetOnDemandThroughput` <a name="ResetOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetOnDemandThroughput"></a>

```csharp
private void ResetOnDemandThroughput()
```

##### `ResetProjection` <a name="ResetProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProjection"></a>

```csharp
private void ResetProjection()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarmThroughput` <a name="ResetWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.resetWarmThroughput"></a>

```csharp
private void ResetWarmThroughput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbGlobalSecondaryIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbGlobalSecondaryIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbGlobalSecondaryIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbGlobalSecondaryIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbGlobalSecondaryIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DynamodbGlobalSecondaryIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamodbGlobalSecondaryIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamodbGlobalSecondaryIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbGlobalSecondaryIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchema">KeySchema</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList">DynamodbGlobalSecondaryIndexKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughput">OnDemandThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList">DynamodbGlobalSecondaryIndexOnDemandThroughputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projection">Projection</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList">DynamodbGlobalSecondaryIndexProjectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList">DynamodbGlobalSecondaryIndexProvisionedThroughputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference">DynamodbGlobalSecondaryIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference">DynamodbGlobalSecondaryIndexWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchemaInput">KeySchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughputInput">OnDemandThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projectionInput">ProjectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughputInput">WarmThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `KeySchema`<sup>Required</sup> <a name="KeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchema"></a>

```csharp
public DynamodbGlobalSecondaryIndexKeySchemaList KeySchema { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList">DynamodbGlobalSecondaryIndexKeySchemaList</a>

---

##### `OnDemandThroughput`<sup>Required</sup> <a name="OnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughput"></a>

```csharp
public DynamodbGlobalSecondaryIndexOnDemandThroughputList OnDemandThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList">DynamodbGlobalSecondaryIndexOnDemandThroughputList</a>

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projection"></a>

```csharp
public DynamodbGlobalSecondaryIndexProjectionList Projection { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList">DynamodbGlobalSecondaryIndexProjectionList</a>

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughput"></a>

```csharp
public DynamodbGlobalSecondaryIndexProvisionedThroughputList ProvisionedThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList">DynamodbGlobalSecondaryIndexProvisionedThroughputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeouts"></a>

```csharp
public DynamodbGlobalSecondaryIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference">DynamodbGlobalSecondaryIndexTimeoutsOutputReference</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughput"></a>

```csharp
public DynamodbGlobalSecondaryIndexWarmThroughputOutputReference WarmThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference">DynamodbGlobalSecondaryIndexWarmThroughputOutputReference</a>

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `KeySchemaInput`<sup>Optional</sup> <a name="KeySchemaInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.keySchemaInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexKeySchema[] KeySchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---

##### `OnDemandThroughputInput`<sup>Optional</sup> <a name="OnDemandThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.onDemandThroughputInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput[] OnDemandThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---

##### `ProjectionInput`<sup>Optional</sup> <a name="ProjectionInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.projectionInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProjection[] ProjectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.provisionedThroughputInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput[] ProvisionedThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.timeoutsInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---

##### `WarmThroughputInput`<sup>Optional</sup> <a name="WarmThroughputInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.warmThroughputInput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexWarmThroughput WarmThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbGlobalSecondaryIndexConfig <a name="DynamodbGlobalSecondaryIndexConfig" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IndexName,
    string TableName,
    IResolvable|DynamodbGlobalSecondaryIndexKeySchema[] KeySchema = null,
    IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput[] OnDemandThroughput = null,
    IResolvable|DynamodbGlobalSecondaryIndexProjection[] Projection = null,
    IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput[] ProvisionedThroughput = null,
    string Region = null,
    DynamodbGlobalSecondaryIndexTimeouts Timeouts = null,
    DynamodbGlobalSecondaryIndexWarmThroughput WarmThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.indexName">IndexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#index_name DynamodbGlobalSecondaryIndex#index_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#table_name DynamodbGlobalSecondaryIndex#table_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.keySchema">KeySchema</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | key_schema block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.onDemandThroughput">OnDemandThroughput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | on_demand_throughput block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.projection">Projection</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | projection block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | provisioned_throughput block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#warm_throughput DynamodbGlobalSecondaryIndex#warm_throughput}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#index_name DynamodbGlobalSecondaryIndex#index_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#table_name DynamodbGlobalSecondaryIndex#table_name}.

---

##### `KeySchema`<sup>Optional</sup> <a name="KeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.keySchema"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexKeySchema[] KeySchema { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

key_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#key_schema DynamodbGlobalSecondaryIndex#key_schema}

---

##### `OnDemandThroughput`<sup>Optional</sup> <a name="OnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.onDemandThroughput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput[] OnDemandThroughput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

on_demand_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#on_demand_throughput DynamodbGlobalSecondaryIndex#on_demand_throughput}

---

##### `Projection`<sup>Optional</sup> <a name="Projection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.projection"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProjection[] Projection { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

projection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#projection DynamodbGlobalSecondaryIndex#projection}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.provisionedThroughput"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput[] ProvisionedThroughput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

provisioned_throughput block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#provisioned_throughput DynamodbGlobalSecondaryIndex#provisioned_throughput}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#region DynamodbGlobalSecondaryIndex#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.timeouts"></a>

```csharp
public DynamodbGlobalSecondaryIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#timeouts DynamodbGlobalSecondaryIndex#timeouts}

---

##### `WarmThroughput`<sup>Optional</sup> <a name="WarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexConfig.property.warmThroughput"></a>

```csharp
public DynamodbGlobalSecondaryIndexWarmThroughput WarmThroughput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#warm_throughput DynamodbGlobalSecondaryIndex#warm_throughput}.

---

### DynamodbGlobalSecondaryIndexKeySchema <a name="DynamodbGlobalSecondaryIndexKeySchema" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexKeySchema {
    string AttributeName,
    string AttributeType,
    string KeyType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#attribute_name DynamodbGlobalSecondaryIndex#attribute_name}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeType">AttributeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#attribute_type DynamodbGlobalSecondaryIndex#attribute_type}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#key_type DynamodbGlobalSecondaryIndex#key_type}. |

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#attribute_name DynamodbGlobalSecondaryIndex#attribute_name}.

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.attributeType"></a>

```csharp
public string AttributeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#attribute_type DynamodbGlobalSecondaryIndex#attribute_type}.

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#key_type DynamodbGlobalSecondaryIndex#key_type}.

---

### DynamodbGlobalSecondaryIndexOnDemandThroughput <a name="DynamodbGlobalSecondaryIndexOnDemandThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexOnDemandThroughput {
    double MaxReadRequestUnits = null,
    double MaxWriteRequestUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#max_read_request_units DynamodbGlobalSecondaryIndex#max_read_request_units}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#max_write_request_units DynamodbGlobalSecondaryIndex#max_write_request_units}. |

---

##### `MaxReadRequestUnits`<sup>Optional</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxReadRequestUnits"></a>

```csharp
public double MaxReadRequestUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#max_read_request_units DynamodbGlobalSecondaryIndex#max_read_request_units}.

---

##### `MaxWriteRequestUnits`<sup>Optional</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput.property.maxWriteRequestUnits"></a>

```csharp
public double MaxWriteRequestUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#max_write_request_units DynamodbGlobalSecondaryIndex#max_write_request_units}.

---

### DynamodbGlobalSecondaryIndexProjection <a name="DynamodbGlobalSecondaryIndexProjection" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProjection {
    string ProjectionType,
    string[] NonKeyAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.projectionType">ProjectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#projection_type DynamodbGlobalSecondaryIndex#projection_type}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#non_key_attributes DynamodbGlobalSecondaryIndex#non_key_attributes}. |

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.projectionType"></a>

```csharp
public string ProjectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#projection_type DynamodbGlobalSecondaryIndex#projection_type}.

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#non_key_attributes DynamodbGlobalSecondaryIndex#non_key_attributes}.

---

### DynamodbGlobalSecondaryIndexProvisionedThroughput <a name="DynamodbGlobalSecondaryIndexProvisionedThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProvisionedThroughput {
    double ReadCapacityUnits = null,
    double WriteCapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#read_capacity_units DynamodbGlobalSecondaryIndex#read_capacity_units}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#write_capacity_units DynamodbGlobalSecondaryIndex#write_capacity_units}. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#read_capacity_units DynamodbGlobalSecondaryIndex#read_capacity_units}.

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#write_capacity_units DynamodbGlobalSecondaryIndex#write_capacity_units}.

---

### DynamodbGlobalSecondaryIndexTimeouts <a name="DynamodbGlobalSecondaryIndexTimeouts" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#create DynamodbGlobalSecondaryIndex#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#delete DynamodbGlobalSecondaryIndex#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#update DynamodbGlobalSecondaryIndex#update}

---

### DynamodbGlobalSecondaryIndexWarmThroughput <a name="DynamodbGlobalSecondaryIndexWarmThroughput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexWarmThroughput {
    double ReadUnitsPerSecond = null,
    double WriteUnitsPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#read_units_per_second DynamodbGlobalSecondaryIndex#read_units_per_second}. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#write_units_per_second DynamodbGlobalSecondaryIndex#write_units_per_second}. |

---

##### `ReadUnitsPerSecond`<sup>Optional</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.readUnitsPerSecond"></a>

```csharp
public double ReadUnitsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#read_units_per_second DynamodbGlobalSecondaryIndex#read_units_per_second}.

---

##### `WriteUnitsPerSecond`<sup>Optional</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput.property.writeUnitsPerSecond"></a>

```csharp
public double WriteUnitsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/dynamodb_global_secondary_index#write_units_per_second DynamodbGlobalSecondaryIndex#write_units_per_second}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbGlobalSecondaryIndexKeySchemaList <a name="DynamodbGlobalSecondaryIndexKeySchemaList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexKeySchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get"></a>

```csharp
private DynamodbGlobalSecondaryIndexKeySchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaList.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexKeySchema[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>[]

---


### DynamodbGlobalSecondaryIndexKeySchemaOutputReference <a name="DynamodbGlobalSecondaryIndexKeySchemaOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexKeySchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeType">AttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeTypeInput"></a>

```csharp
public string AttributeTypeInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.attributeType"></a>

```csharp
public string AttributeType { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexKeySchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexKeySchema">DynamodbGlobalSecondaryIndexKeySchema</a>

---


### DynamodbGlobalSecondaryIndexOnDemandThroughputList <a name="DynamodbGlobalSecondaryIndexOnDemandThroughputList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexOnDemandThroughputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get"></a>

```csharp
private DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputList.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>[]

---


### DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits">ResetMaxReadRequestUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits">ResetMaxWriteRequestUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReadRequestUnits` <a name="ResetMaxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxReadRequestUnits"></a>

```csharp
private void ResetMaxReadRequestUnits()
```

##### `ResetMaxWriteRequestUnits` <a name="ResetMaxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.resetMaxWriteRequestUnits"></a>

```csharp
private void ResetMaxWriteRequestUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput">MaxReadRequestUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput">MaxWriteRequestUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits">MaxReadRequestUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits">MaxWriteRequestUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxReadRequestUnitsInput`<sup>Optional</sup> <a name="MaxReadRequestUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnitsInput"></a>

```csharp
public double MaxReadRequestUnitsInput { get; }
```

- *Type:* double

---

##### `MaxWriteRequestUnitsInput`<sup>Optional</sup> <a name="MaxWriteRequestUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnitsInput"></a>

```csharp
public double MaxWriteRequestUnitsInput { get; }
```

- *Type:* double

---

##### `MaxReadRequestUnits`<sup>Required</sup> <a name="MaxReadRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxReadRequestUnits"></a>

```csharp
public double MaxReadRequestUnits { get; }
```

- *Type:* double

---

##### `MaxWriteRequestUnits`<sup>Required</sup> <a name="MaxWriteRequestUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.maxWriteRequestUnits"></a>

```csharp
public double MaxWriteRequestUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexOnDemandThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexOnDemandThroughput">DynamodbGlobalSecondaryIndexOnDemandThroughput</a>

---


### DynamodbGlobalSecondaryIndexProjectionList <a name="DynamodbGlobalSecondaryIndexProjectionList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProjectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get"></a>

```csharp
private DynamodbGlobalSecondaryIndexProjectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionList.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProjection[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>[]

---


### DynamodbGlobalSecondaryIndexProjectionOutputReference <a name="DynamodbGlobalSecondaryIndexProjectionOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProjectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.resetNonKeyAttributes"></a>

```csharp
private void ResetNonKeyAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionType">ProjectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributesInput"></a>

```csharp
public string[] NonKeyAttributesInput { get; }
```

- *Type:* string[]

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionTypeInput"></a>

```csharp
public string ProjectionTypeInput { get; }
```

- *Type:* string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; }
```

- *Type:* string[]

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.projectionType"></a>

```csharp
public string ProjectionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProjection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProjection">DynamodbGlobalSecondaryIndexProjection</a>

---


### DynamodbGlobalSecondaryIndexProvisionedThroughputList <a name="DynamodbGlobalSecondaryIndexProvisionedThroughputList" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProvisionedThroughputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get"></a>

```csharp
private DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputList.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>[]

---


### DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```csharp
private void ResetReadCapacityUnits()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```csharp
private void ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```csharp
public double ReadCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```csharp
public double WriteCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; }
```

- *Type:* double

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexProvisionedThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexProvisionedThroughput">DynamodbGlobalSecondaryIndexProvisionedThroughput</a>

---


### DynamodbGlobalSecondaryIndexTimeoutsOutputReference <a name="DynamodbGlobalSecondaryIndexTimeoutsOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexTimeouts">DynamodbGlobalSecondaryIndexTimeouts</a>

---


### DynamodbGlobalSecondaryIndexWarmThroughputOutputReference <a name="DynamodbGlobalSecondaryIndexWarmThroughputOutputReference" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbGlobalSecondaryIndexWarmThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetReadUnitsPerSecond">ResetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetWriteUnitsPerSecond">ResetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadUnitsPerSecond` <a name="ResetReadUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```csharp
private void ResetReadUnitsPerSecond()
```

##### `ResetWriteUnitsPerSecond` <a name="ResetWriteUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```csharp
private void ResetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecondInput">ReadUnitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecondInput">WriteUnitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadUnitsPerSecondInput`<sup>Optional</sup> <a name="ReadUnitsPerSecondInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```csharp
public double ReadUnitsPerSecondInput { get; }
```

- *Type:* double

---

##### `WriteUnitsPerSecondInput`<sup>Optional</sup> <a name="WriteUnitsPerSecondInput" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```csharp
public double WriteUnitsPerSecondInput { get; }
```

- *Type:* double

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```csharp
public double ReadUnitsPerSecond { get; }
```

- *Type:* double

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```csharp
public double WriteUnitsPerSecond { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbGlobalSecondaryIndexWarmThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbGlobalSecondaryIndex.DynamodbGlobalSecondaryIndexWarmThroughput">DynamodbGlobalSecondaryIndexWarmThroughput</a>

---



