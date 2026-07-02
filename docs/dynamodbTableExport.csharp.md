# `dynamodbTableExport` Submodule <a name="`dynamodbTableExport` Submodule" id="@cdktn/provider-aws.dynamodbTableExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableExport <a name="DynamodbTableExport" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExport(Construct Scope, string Id, DynamodbTableExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig">DynamodbTableExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig">DynamodbTableExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification">PutIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat">ResetExportFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime">ResetExportTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportType">ResetExportType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetIncrementalExportSpecification">ResetIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix">ResetS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm">ResetS3SseAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId">ResetS3SseKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncrementalExportSpecification` <a name="PutIncrementalExportSpecification" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification"></a>

```csharp
private void PutIncrementalExportSpecification(DynamodbTableExportIncrementalExportSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putIncrementalExportSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts"></a>

```csharp
private void PutTimeouts(DynamodbTableExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---

##### `ResetExportFormat` <a name="ResetExportFormat" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportFormat"></a>

```csharp
private void ResetExportFormat()
```

##### `ResetExportTime` <a name="ResetExportTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportTime"></a>

```csharp
private void ResetExportTime()
```

##### `ResetExportType` <a name="ResetExportType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetExportType"></a>

```csharp
private void ResetExportType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncrementalExportSpecification` <a name="ResetIncrementalExportSpecification" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetIncrementalExportSpecification"></a>

```csharp
private void ResetIncrementalExportSpecification()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3BucketOwner"></a>

```csharp
private void ResetS3BucketOwner()
```

##### `ResetS3Prefix` <a name="ResetS3Prefix" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3Prefix"></a>

```csharp
private void ResetS3Prefix()
```

##### `ResetS3SseAlgorithm` <a name="ResetS3SseAlgorithm" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseAlgorithm"></a>

```csharp
private void ResetS3SseAlgorithm()
```

##### `ResetS3SseKmsKeyId` <a name="ResetS3SseKmsKeyId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetS3SseKmsKeyId"></a>

```csharp
private void ResetS3SseKmsKeyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbTableExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DynamodbTableExport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamodbTableExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamodbTableExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTableExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes">BilledSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus">ExportStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecification">IncrementalExportSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference">DynamodbTableExportIncrementalExportSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount">ItemCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key">ManifestFilesS3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput">ExportFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput">ExportTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTypeInput">ExportTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecificationInput">IncrementalExportSpecificationInput</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput">S3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput">S3SseAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput">S3SseKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput">TableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat">ExportFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime">ExportTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportType">ExportType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm">S3SseAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId">S3SseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BilledSizeInBytes`<sup>Required</sup> <a name="BilledSizeInBytes" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.billedSizeInBytes"></a>

```csharp
public double BilledSizeInBytes { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ExportStatus`<sup>Required</sup> <a name="ExportStatus" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportStatus"></a>

```csharp
public string ExportStatus { get; }
```

- *Type:* string

---

##### `IncrementalExportSpecification`<sup>Required</sup> <a name="IncrementalExportSpecification" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecification"></a>

```csharp
public DynamodbTableExportIncrementalExportSpecificationOutputReference IncrementalExportSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference">DynamodbTableExportIncrementalExportSpecificationOutputReference</a>

---

##### `ItemCount`<sup>Required</sup> <a name="ItemCount" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.itemCount"></a>

```csharp
public double ItemCount { get; }
```

- *Type:* double

---

##### `ManifestFilesS3Key`<sup>Required</sup> <a name="ManifestFilesS3Key" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.manifestFilesS3Key"></a>

```csharp
public string ManifestFilesS3Key { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeouts"></a>

```csharp
public DynamodbTableExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference">DynamodbTableExportTimeoutsOutputReference</a>

---

##### `ExportFormatInput`<sup>Optional</sup> <a name="ExportFormatInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormatInput"></a>

```csharp
public string ExportFormatInput { get; }
```

- *Type:* string

---

##### `ExportTimeInput`<sup>Optional</sup> <a name="ExportTimeInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTimeInput"></a>

```csharp
public string ExportTimeInput { get; }
```

- *Type:* string

---

##### `ExportTypeInput`<sup>Optional</sup> <a name="ExportTypeInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTypeInput"></a>

```csharp
public string ExportTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncrementalExportSpecificationInput`<sup>Optional</sup> <a name="IncrementalExportSpecificationInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.incrementalExportSpecificationInput"></a>

```csharp
public DynamodbTableExportIncrementalExportSpecification IncrementalExportSpecificationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwnerInput"></a>

```csharp
public string S3BucketOwnerInput { get; }
```

- *Type:* string

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3PrefixInput"></a>

```csharp
public string S3PrefixInput { get; }
```

- *Type:* string

---

##### `S3SseAlgorithmInput`<sup>Optional</sup> <a name="S3SseAlgorithmInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithmInput"></a>

```csharp
public string S3SseAlgorithmInput { get; }
```

- *Type:* string

---

##### `S3SseKmsKeyIdInput`<sup>Optional</sup> <a name="S3SseKmsKeyIdInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyIdInput"></a>

```csharp
public string S3SseKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `TableArnInput`<sup>Optional</sup> <a name="TableArnInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArnInput"></a>

```csharp
public string TableArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.timeoutsInput"></a>

```csharp
public IResolvable|DynamodbTableExportTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---

##### `ExportFormat`<sup>Required</sup> <a name="ExportFormat" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportFormat"></a>

```csharp
public string ExportFormat { get; }
```

- *Type:* string

---

##### `ExportTime`<sup>Required</sup> <a name="ExportTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportTime"></a>

```csharp
public string ExportTime { get; }
```

- *Type:* string

---

##### `ExportType`<sup>Required</sup> <a name="ExportType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.exportType"></a>

```csharp
public string ExportType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; }
```

- *Type:* string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; }
```

- *Type:* string

---

##### `S3SseAlgorithm`<sup>Required</sup> <a name="S3SseAlgorithm" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseAlgorithm"></a>

```csharp
public string S3SseAlgorithm { get; }
```

- *Type:* string

---

##### `S3SseKmsKeyId`<sup>Required</sup> <a name="S3SseKmsKeyId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.s3SseKmsKeyId"></a>

```csharp
public string S3SseKmsKeyId { get; }
```

- *Type:* string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableExportConfig <a name="DynamodbTableExportConfig" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string S3Bucket,
    string TableArn,
    string ExportFormat = null,
    string ExportTime = null,
    string ExportType = null,
    string Id = null,
    DynamodbTableExportIncrementalExportSpecification IncrementalExportSpecification = null,
    string Region = null,
    string S3BucketOwner = null,
    string S3Prefix = null,
    string S3SseAlgorithm = null,
    string S3SseKmsKeyId = null,
    DynamodbTableExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn">TableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat">ExportFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime">ExportTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportType">ExportType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.incrementalExportSpecification">IncrementalExportSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | incremental_export_specification block. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner">S3BucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix">S3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm">S3SseAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId">S3SseKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}.

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.tableArn"></a>

```csharp
public string TableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}.

---

##### `ExportFormat`<sup>Optional</sup> <a name="ExportFormat" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportFormat"></a>

```csharp
public string ExportFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}.

---

##### `ExportTime`<sup>Optional</sup> <a name="ExportTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportTime"></a>

```csharp
public string ExportTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}.

---

##### `ExportType`<sup>Optional</sup> <a name="ExportType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.exportType"></a>

```csharp
public string ExportType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalExportSpecification`<sup>Optional</sup> <a name="IncrementalExportSpecification" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.incrementalExportSpecification"></a>

```csharp
public DynamodbTableExportIncrementalExportSpecification IncrementalExportSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

incremental_export_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#incremental_export_specification DynamodbTableExport#incremental_export_specification}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#region DynamodbTableExport#region}

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3BucketOwner"></a>

```csharp
public string S3BucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}.

---

##### `S3Prefix`<sup>Optional</sup> <a name="S3Prefix" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3Prefix"></a>

```csharp
public string S3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}.

---

##### `S3SseAlgorithm`<sup>Optional</sup> <a name="S3SseAlgorithm" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseAlgorithm"></a>

```csharp
public string S3SseAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}.

---

##### `S3SseKmsKeyId`<sup>Optional</sup> <a name="S3SseKmsKeyId" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.s3SseKmsKeyId"></a>

```csharp
public string S3SseKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportConfig.property.timeouts"></a>

```csharp
public DynamodbTableExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}

---

### DynamodbTableExportIncrementalExportSpecification <a name="DynamodbTableExportIncrementalExportSpecification" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExportIncrementalExportSpecification {
    string ExportFromTime = null,
    string ExportToTime = null,
    string ExportViewType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportFromTime">ExportFromTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_from_time DynamodbTableExport#export_from_time}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportToTime">ExportToTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_to_time DynamodbTableExport#export_to_time}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportViewType">ExportViewType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_view_type DynamodbTableExport#export_view_type}. |

---

##### `ExportFromTime`<sup>Optional</sup> <a name="ExportFromTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportFromTime"></a>

```csharp
public string ExportFromTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_from_time DynamodbTableExport#export_from_time}.

---

##### `ExportToTime`<sup>Optional</sup> <a name="ExportToTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportToTime"></a>

```csharp
public string ExportToTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_to_time DynamodbTableExport#export_to_time}.

---

##### `ExportViewType`<sup>Optional</sup> <a name="ExportViewType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification.property.exportViewType"></a>

```csharp
public string ExportViewType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#export_view_type DynamodbTableExport#export_view_type}.

---

### DynamodbTableExportTimeouts <a name="DynamodbTableExportTimeouts" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExportTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableExportIncrementalExportSpecificationOutputReference <a name="DynamodbTableExportIncrementalExportSpecificationOutputReference" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExportIncrementalExportSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportFromTime">ResetExportFromTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportToTime">ResetExportToTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportViewType">ResetExportViewType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExportFromTime` <a name="ResetExportFromTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportFromTime"></a>

```csharp
private void ResetExportFromTime()
```

##### `ResetExportToTime` <a name="ResetExportToTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportToTime"></a>

```csharp
private void ResetExportToTime()
```

##### `ResetExportViewType` <a name="ResetExportViewType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.resetExportViewType"></a>

```csharp
private void ResetExportViewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTimeInput">ExportFromTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTimeInput">ExportToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewTypeInput">ExportViewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTime">ExportFromTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTime">ExportToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewType">ExportViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportFromTimeInput`<sup>Optional</sup> <a name="ExportFromTimeInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTimeInput"></a>

```csharp
public string ExportFromTimeInput { get; }
```

- *Type:* string

---

##### `ExportToTimeInput`<sup>Optional</sup> <a name="ExportToTimeInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTimeInput"></a>

```csharp
public string ExportToTimeInput { get; }
```

- *Type:* string

---

##### `ExportViewTypeInput`<sup>Optional</sup> <a name="ExportViewTypeInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewTypeInput"></a>

```csharp
public string ExportViewTypeInput { get; }
```

- *Type:* string

---

##### `ExportFromTime`<sup>Required</sup> <a name="ExportFromTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportFromTime"></a>

```csharp
public string ExportFromTime { get; }
```

- *Type:* string

---

##### `ExportToTime`<sup>Required</sup> <a name="ExportToTime" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportToTime"></a>

```csharp
public string ExportToTime { get; }
```

- *Type:* string

---

##### `ExportViewType`<sup>Required</sup> <a name="ExportViewType" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.exportViewType"></a>

```csharp
public string ExportViewType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecificationOutputReference.property.internalValue"></a>

```csharp
public DynamodbTableExportIncrementalExportSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportIncrementalExportSpecification">DynamodbTableExportIncrementalExportSpecification</a>

---


### DynamodbTableExportTimeoutsOutputReference <a name="DynamodbTableExportTimeoutsOutputReference" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbTableExportTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbTableExport.DynamodbTableExportTimeouts">DynamodbTableExportTimeouts</a>

---



