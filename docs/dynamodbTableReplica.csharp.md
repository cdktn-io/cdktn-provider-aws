# `dynamodbTableReplica` Submodule <a name="`dynamodbTableReplica` Submodule" id="@cdktn/provider-aws.dynamodbTableReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTableReplicaA <a name="DynamodbTableReplicaA" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica aws_dynamodb_table_replica}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableReplicaA(Construct Scope, string Id, DynamodbTableReplicaAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig">DynamodbTableReplicaAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig">DynamodbTableReplicaAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride">ResetTableClassOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts"></a>

```csharp
private void PutTimeouts(DynamodbTableReplicaTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetDeletionProtectionEnabled"></a>

```csharp
private void ResetDeletionProtectionEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetPointInTimeRecovery"></a>

```csharp
private void ResetPointInTimeRecovery()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTableClassOverride` <a name="ResetTableClassOverride" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTableClassOverride"></a>

```csharp
private void ResetTableClassOverride()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DynamodbTableReplicaA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableReplicaA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableReplicaA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableReplicaA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DynamodbTableReplicaA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DynamodbTableReplicaA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamodbTableReplicaA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamodbTableReplicaA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DynamodbTableReplicaA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput">GlobalTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput">TableClassOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn">GlobalTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride">TableClassOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeouts"></a>

```csharp
public DynamodbTableReplicaTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference">DynamodbTableReplicaTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.deletionProtectionEnabledInput"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalTableArnInput`<sup>Optional</sup> <a name="GlobalTableArnInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArnInput"></a>

```csharp
public string GlobalTableArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecoveryInput"></a>

```csharp
public bool|IResolvable PointInTimeRecoveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableClassOverrideInput`<sup>Optional</sup> <a name="TableClassOverrideInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverrideInput"></a>

```csharp
public string TableClassOverrideInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.timeoutsInput"></a>

```csharp
public IResolvable|DynamodbTableReplicaTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GlobalTableArn`<sup>Required</sup> <a name="GlobalTableArn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.globalTableArn"></a>

```csharp
public string GlobalTableArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.pointInTimeRecovery"></a>

```csharp
public bool|IResolvable PointInTimeRecovery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableClassOverride`<sup>Required</sup> <a name="TableClassOverride" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tableClassOverride"></a>

```csharp
public string TableClassOverride { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableReplicaAConfig <a name="DynamodbTableReplicaAConfig" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableReplicaAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GlobalTableArn,
    bool|IResolvable DeletionProtectionEnabled = null,
    string Id = null,
    string KmsKeyArn = null,
    bool|IResolvable PointInTimeRecovery = null,
    string Region = null,
    string TableClassOverride = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DynamodbTableReplicaTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn">GlobalTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#deletion_protection_enabled DynamodbTableReplicaA#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#id DynamodbTableReplicaA#id}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride">TableClassOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GlobalTableArn`<sup>Required</sup> <a name="GlobalTableArn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.globalTableArn"></a>

```csharp
public string GlobalTableArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#global_table_arn DynamodbTableReplicaA#global_table_arn}.

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.deletionProtectionEnabled"></a>

```csharp
public bool|IResolvable DeletionProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#deletion_protection_enabled DynamodbTableReplicaA#deletion_protection_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#id DynamodbTableReplicaA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#kms_key_arn DynamodbTableReplicaA#kms_key_arn}.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.pointInTimeRecovery"></a>

```csharp
public bool|IResolvable PointInTimeRecovery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#point_in_time_recovery DynamodbTableReplicaA#point_in_time_recovery}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#region DynamodbTableReplicaA#region}

---

##### `TableClassOverride`<sup>Optional</sup> <a name="TableClassOverride" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tableClassOverride"></a>

```csharp
public string TableClassOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#table_class_override DynamodbTableReplicaA#table_class_override}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#tags DynamodbTableReplicaA#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#tags_all DynamodbTableReplicaA#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaAConfig.property.timeouts"></a>

```csharp
public DynamodbTableReplicaTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#timeouts DynamodbTableReplicaA#timeouts}

---

### DynamodbTableReplicaTimeouts <a name="DynamodbTableReplicaTimeouts" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableReplicaTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#create DynamodbTableReplicaA#create}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#update DynamodbTableReplicaA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#create DynamodbTableReplicaA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#delete DynamodbTableReplicaA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/dynamodb_table_replica#update DynamodbTableReplicaA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableReplicaTimeoutsOutputReference <a name="DynamodbTableReplicaTimeoutsOutputReference" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DynamodbTableReplicaTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DynamodbTableReplicaTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dynamodbTableReplica.DynamodbTableReplicaTimeouts">DynamodbTableReplicaTimeouts</a>

---



