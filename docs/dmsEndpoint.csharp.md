# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpoint(Construct Scope, string Id, DmsEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">PutElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">PutKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">PutKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">PutMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings">PutMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings">PutOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings">PutPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">PutRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">ResetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">ResetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">ResetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">ResetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">ResetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMysqlSettings">ResetMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOracleSettings">ResetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks">ResetPauseReplicationTasks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings">ResetPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">ResetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">ResetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">ResetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutElasticsearchSettings` <a name="PutElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```csharp
private void PutElasticsearchSettings(DmsEndpointElasticsearchSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `PutKafkaSettings` <a name="PutKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```csharp
private void PutKafkaSettings(DmsEndpointKafkaSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `PutKinesisSettings` <a name="PutKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```csharp
private void PutKinesisSettings(DmsEndpointKinesisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `PutMongodbSettings` <a name="PutMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```csharp
private void PutMongodbSettings(DmsEndpointMongodbSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `PutMysqlSettings` <a name="PutMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings"></a>

```csharp
private void PutMysqlSettings(DmsEndpointMysqlSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putMysqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```csharp
private void PutOracleSettings(DmsEndpointOracleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `PutPostgresSettings` <a name="PutPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings"></a>

```csharp
private void PutPostgresSettings(DmsEndpointPostgresSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putPostgresSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `PutRedisSettings` <a name="PutRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```csharp
private void PutRedisSettings(DmsEndpointRedisSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```csharp
private void PutRedshiftSettings(DmsEndpointRedshiftSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```csharp
private void ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetElasticsearchSettings` <a name="ResetElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```csharp
private void ResetElasticsearchSettings()
```

##### `ResetExtraConnectionAttributes` <a name="ResetExtraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```csharp
private void ResetExtraConnectionAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKafkaSettings` <a name="ResetKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```csharp
private void ResetKafkaSettings()
```

##### `ResetKinesisSettings` <a name="ResetKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```csharp
private void ResetKinesisSettings()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetMongodbSettings` <a name="ResetMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```csharp
private void ResetMongodbSettings()
```

##### `ResetMysqlSettings` <a name="ResetMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetMysqlSettings"></a>

```csharp
private void ResetMysqlSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```csharp
private void ResetOracleSettings()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPauseReplicationTasks` <a name="ResetPauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPauseReplicationTasks"></a>

```csharp
private void ResetPauseReplicationTasks()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPostgresSettings` <a name="ResetPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetPostgresSettings"></a>

```csharp
private void ResetPostgresSettings()
```

##### `ResetRedisSettings` <a name="ResetRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```csharp
private void ResetRedisSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```csharp
private void ResetRedshiftSettings()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerArn` <a name="ResetSecretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```csharp
private void ResetSecretsManagerArn()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```csharp
private void ResetServerName()
```

##### `ResetServiceAccessRole` <a name="ResetServiceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```csharp
private void ResetServiceAccessRole()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">EndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettings">MysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference">DmsEndpointMysqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings">PostgresSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">CertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">ElasticsearchSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">EngineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">ExtraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">KafkaSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">KinesisSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">MongodbSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettingsInput">MysqlSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput">PauseReplicationTasksInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput">PostgresSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">RedisSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">SecretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">ServiceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">EngineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks">PauseReplicationTasks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ElasticsearchSettings`<sup>Required</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettingsOutputReference ElasticsearchSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```csharp
public string EndpointArn { get; }
```

- *Type:* string

---

##### `KafkaSettings`<sup>Required</sup> <a name="KafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettingsOutputReference KafkaSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `KinesisSettings`<sup>Required</sup> <a name="KinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettingsOutputReference KinesisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `MongodbSettings`<sup>Required</sup> <a name="MongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```csharp
public DmsEndpointMongodbSettingsOutputReference MongodbSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `MysqlSettings`<sup>Required</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettings"></a>

```csharp
public DmsEndpointMysqlSettingsOutputReference MysqlSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference">DmsEndpointMysqlSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```csharp
public DmsEndpointOracleSettingsOutputReference OracleSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `PostgresSettings`<sup>Required</sup> <a name="PostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettings"></a>

```csharp
public DmsEndpointPostgresSettingsOutputReference PostgresSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference">DmsEndpointPostgresSettingsOutputReference</a>

---

##### `RedisSettings`<sup>Required</sup> <a name="RedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettingsOutputReference RedisSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettingsOutputReference RedshiftSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```csharp
public DmsEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```csharp
public string CertificateArnInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `ElasticsearchSettingsInput`<sup>Optional</sup> <a name="ElasticsearchSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```csharp
public DmsEndpointElasticsearchSettings ElasticsearchSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `EngineNameInput`<sup>Optional</sup> <a name="EngineNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```csharp
public string EngineNameInput { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributesInput`<sup>Optional</sup> <a name="ExtraConnectionAttributesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```csharp
public string ExtraConnectionAttributesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KafkaSettingsInput`<sup>Optional</sup> <a name="KafkaSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```csharp
public DmsEndpointKafkaSettings KafkaSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `KinesisSettingsInput`<sup>Optional</sup> <a name="KinesisSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```csharp
public DmsEndpointKinesisSettings KinesisSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `MongodbSettingsInput`<sup>Optional</sup> <a name="MongodbSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```csharp
public DmsEndpointMongodbSettings MongodbSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `MysqlSettingsInput`<sup>Optional</sup> <a name="MysqlSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.mysqlSettingsInput"></a>

```csharp
public DmsEndpointMysqlSettings MysqlSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```csharp
public DmsEndpointOracleSettings OracleSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PauseReplicationTasksInput`<sup>Optional</sup> <a name="PauseReplicationTasksInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasksInput"></a>

```csharp
public bool|IResolvable PauseReplicationTasksInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PostgresSettingsInput`<sup>Optional</sup> <a name="PostgresSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.postgresSettingsInput"></a>

```csharp
public DmsEndpointPostgresSettings PostgresSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---

##### `RedisSettingsInput`<sup>Optional</sup> <a name="RedisSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```csharp
public DmsEndpointRedisSettings RedisSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```csharp
public DmsEndpointRedshiftSettings RedshiftSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerArnInput`<sup>Optional</sup> <a name="SecretsManagerArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```csharp
public string SecretsManagerArnInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleInput`<sup>Optional</sup> <a name="ServiceAccessRoleInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```csharp
public string ServiceAccessRoleInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|DmsEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```csharp
public string EngineName { get; }
```

- *Type:* string

---

##### `ExtraConnectionAttributes`<sup>Required</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PauseReplicationTasks`<sup>Required</sup> <a name="PauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.pauseReplicationTasks"></a>

```csharp
public bool|IResolvable PauseReplicationTasks { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `ServiceAccessRole`<sup>Required</sup> <a name="ServiceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```csharp
public string ServiceAccessRole { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EndpointId,
    string EndpointType,
    string EngineName,
    string CertificateArn = null,
    string DatabaseName = null,
    DmsEndpointElasticsearchSettings ElasticsearchSettings = null,
    string ExtraConnectionAttributes = null,
    string Id = null,
    DmsEndpointKafkaSettings KafkaSettings = null,
    DmsEndpointKinesisSettings KinesisSettings = null,
    string KmsKeyArn = null,
    DmsEndpointMongodbSettings MongodbSettings = null,
    DmsEndpointMysqlSettings MysqlSettings = null,
    DmsEndpointOracleSettings OracleSettings = null,
    string Password = null,
    bool|IResolvable PauseReplicationTasks = null,
    double Port = null,
    DmsEndpointPostgresSettings PostgresSettings = null,
    DmsEndpointRedisSettings RedisSettings = null,
    DmsEndpointRedshiftSettings RedshiftSettings = null,
    string Region = null,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerArn = null,
    string ServerName = null,
    string ServiceAccessRole = null,
    string SslMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DmsEndpointTimeouts Timeouts = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">EngineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">CertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">ElasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">ExtraConnectionAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">KafkaSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">KinesisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">MongodbSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mysqlSettings">MysqlSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | mysql_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | oracle_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks">PauseReplicationTasks</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings">PostgresSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | postgres_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">RedisSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">ServiceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `EngineName`<sup>Required</sup> <a name="EngineName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```csharp
public string EngineName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```csharp
public string CertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `ElasticsearchSettings`<sup>Optional</sup> <a name="ElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```csharp
public DmsEndpointElasticsearchSettings ElasticsearchSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `ExtraConnectionAttributes`<sup>Optional</sup> <a name="ExtraConnectionAttributes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```csharp
public string ExtraConnectionAttributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KafkaSettings`<sup>Optional</sup> <a name="KafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```csharp
public DmsEndpointKafkaSettings KafkaSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `KinesisSettings`<sup>Optional</sup> <a name="KinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```csharp
public DmsEndpointKinesisSettings KinesisSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `MongodbSettings`<sup>Optional</sup> <a name="MongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```csharp
public DmsEndpointMongodbSettings MongodbSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `MysqlSettings`<sup>Optional</sup> <a name="MysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mysqlSettings"></a>

```csharp
public DmsEndpointMysqlSettings MysqlSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

mysql_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#mysql_settings DmsEndpoint#mysql_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```csharp
public DmsEndpointOracleSettings OracleSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

oracle_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `PauseReplicationTasks`<sup>Optional</sup> <a name="PauseReplicationTasks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.pauseReplicationTasks"></a>

```csharp
public bool|IResolvable PauseReplicationTasks { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#pause_replication_tasks DmsEndpoint#pause_replication_tasks}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `PostgresSettings`<sup>Optional</sup> <a name="PostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.postgresSettings"></a>

```csharp
public DmsEndpointPostgresSettings PostgresSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

postgres_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#postgres_settings DmsEndpoint#postgres_settings}

---

##### `RedisSettings`<sup>Optional</sup> <a name="RedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```csharp
public DmsEndpointRedisSettings RedisSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```csharp
public DmsEndpointRedshiftSettings RedshiftSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#region DmsEndpoint#region}

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `SecretsManagerArn`<sup>Optional</sup> <a name="SecretsManagerArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```csharp
public string SecretsManagerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `ServiceAccessRole`<sup>Optional</sup> <a name="ServiceAccessRole" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```csharp
public string ServiceAccessRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```csharp
public DmsEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointElasticsearchSettings {
    string EndpointUri,
    string ServiceAccessRoleArn,
    double ErrorRetryDuration = null,
    double FullLoadErrorPercentage = null,
    bool|IResolvable UseNewMappingType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">EndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType">UseNewMappingType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}. |

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```csharp
public string EndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `ErrorRetryDuration`<sup>Optional</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `FullLoadErrorPercentage`<sup>Optional</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

##### `UseNewMappingType`<sup>Optional</sup> <a name="UseNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.useNewMappingType"></a>

```csharp
public bool|IResolvable UseNewMappingType { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_new_mapping_type DmsEndpoint#use_new_mapping_type}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointKafkaSettings {
    string Broker,
    bool|IResolvable IncludeControlDetails = null,
    bool|IResolvable IncludeNullAndEmpty = null,
    bool|IResolvable IncludePartitionValue = null,
    bool|IResolvable IncludeTableAlterOperations = null,
    bool|IResolvable IncludeTransactionDetails = null,
    string MessageFormat = null,
    double MessageMaxBytes = null,
    bool|IResolvable NoHexPrefix = null,
    bool|IResolvable PartitionIncludeSchemaTable = null,
    string SaslMechanism = null,
    string SaslPassword = null,
    string SaslUsername = null,
    string SecurityProtocol = null,
    string SslCaCertificateArn = null,
    string SslClientCertificateArn = null,
    string SslClientKeyArn = null,
    string SslClientKeyPassword = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">Broker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism">SaslMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">SaslPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">SaslUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```csharp
public string Broker { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `MessageMaxBytes`<sup>Optional</sup> <a name="MessageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `NoHexPrefix`<sup>Optional</sup> <a name="NoHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `SaslMechanism`<sup>Optional</sup> <a name="SaslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslMechanism"></a>

```csharp
public string SaslMechanism { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_mechanism DmsEndpoint#sasl_mechanism}.

---

##### `SaslPassword`<sup>Optional</sup> <a name="SaslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```csharp
public string SaslPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `SaslUsername`<sup>Optional</sup> <a name="SaslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```csharp
public string SaslUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `SslClientCertificateArn`<sup>Optional</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `SslClientKeyArn`<sup>Optional</sup> <a name="SslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `SslClientKeyPassword`<sup>Optional</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointKinesisSettings {
    bool|IResolvable IncludeControlDetails = null,
    bool|IResolvable IncludeNullAndEmpty = null,
    bool|IResolvable IncludePartitionValue = null,
    bool|IResolvable IncludeTableAlterOperations = null,
    bool|IResolvable IncludeTransactionDetails = null,
    string MessageFormat = null,
    bool|IResolvable PartitionIncludeSchemaTable = null,
    string ServiceAccessRoleArn = null,
    string StreamArn = null,
    bool|IResolvable UseLargeIntegerValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">MessageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue">UseLargeIntegerValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}. |

---

##### `IncludeControlDetails`<sup>Optional</sup> <a name="IncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `IncludeNullAndEmpty`<sup>Optional</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `IncludePartitionValue`<sup>Optional</sup> <a name="IncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `IncludeTableAlterOperations`<sup>Optional</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `IncludeTransactionDetails`<sup>Optional</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `MessageFormat`<sup>Optional</sup> <a name="MessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```csharp
public string MessageFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `PartitionIncludeSchemaTable`<sup>Optional</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

##### `UseLargeIntegerValue`<sup>Optional</sup> <a name="UseLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.useLargeIntegerValue"></a>

```csharp
public bool|IResolvable UseLargeIntegerValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_large_integer_value DmsEndpoint#use_large_integer_value}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointMongodbSettings {
    string AuthMechanism = null,
    string AuthSource = null,
    string AuthType = null,
    string DocsToInvestigate = null,
    string ExtractDocId = null,
    string NestingLevel = null,
    bool|IResolvable UseUpdateLookup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">AuthSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.useUpdateLookup">UseUpdateLookup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_update_lookup DmsEndpoint#use_update_lookup}. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```csharp
public string AuthSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `DocsToInvestigate`<sup>Optional</sup> <a name="DocsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `ExtractDocId`<sup>Optional</sup> <a name="ExtractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `NestingLevel`<sup>Optional</sup> <a name="NestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

##### `UseUpdateLookup`<sup>Optional</sup> <a name="UseUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.useUpdateLookup"></a>

```csharp
public bool|IResolvable UseUpdateLookup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_update_lookup DmsEndpoint#use_update_lookup}.

---

### DmsEndpointMysqlSettings <a name="DmsEndpointMysqlSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointMysqlSettings {
    string AfterConnectScript = null,
    string AuthenticationMethod = null,
    bool|IResolvable CleanSourceMetadataOnMismatch = null,
    double EventsPollInterval = null,
    double ExecuteTimeout = null,
    double MaxFileSize = null,
    double ParallelLoadThreads = null,
    string ServerTimezone = null,
    string ServiceAccessRoleArn = null,
    string TargetDbType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.targetDbType">TargetDbType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}.

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `CleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}.

---

##### `EventsPollInterval`<sup>Optional</sup> <a name="EventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}.

---

##### `ExecuteTimeout`<sup>Optional</sup> <a name="ExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}.

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `ParallelLoadThreads`<sup>Optional</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}.

---

##### `ServerTimezone`<sup>Optional</sup> <a name="ServerTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `TargetDbType`<sup>Optional</sup> <a name="TargetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings.property.targetDbType"></a>

```csharp
public string TargetDbType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}.

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointOracleSettings {
    bool|IResolvable AccessAlternateDirectly = null,
    double AdditionalArchivedLogDestId = null,
    bool|IResolvable AddSupplementalLogging = null,
    bool|IResolvable AllowSelectedNestedTables = null,
    double ArchivedLogDestId = null,
    bool|IResolvable ArchivedLogsOnly = null,
    string AsmPassword = null,
    string AsmServer = null,
    string AsmUser = null,
    string AuthenticationMethod = null,
    string CharLengthSemantics = null,
    bool|IResolvable ConvertTimestampWithZoneToUtc = null,
    bool|IResolvable DirectPathNoLog = null,
    bool|IResolvable DirectPathParallelLoad = null,
    bool|IResolvable EnableHomogenousTablespace = null,
    double[] ExtraArchivedLogDestIds = null,
    bool|IResolvable FailTaskOnLobTruncation = null,
    double NumberDatatypeScale = null,
    double OpenTransactionWindow = null,
    string OraclePathPrefix = null,
    double ParallelAsmReadThreads = null,
    double ReadAheadBlocks = null,
    bool|IResolvable ReadTableSpaceName = null,
    bool|IResolvable ReplacePathPrefix = null,
    double RetryInterval = null,
    string SecretsManagerOracleAsmAccessRoleArn = null,
    string SecretsManagerOracleAsmSecretId = null,
    string SecurityDbEncryption = null,
    string SecurityDbEncryptionName = null,
    string SpatialDataOptionToGeoJsonFunctionName = null,
    double StandbyDelayTime = null,
    bool|IResolvable TrimSpaceInChar = null,
    bool|IResolvable UseAlternateFolderForOnline = null,
    bool|IResolvable UseBfile = null,
    bool|IResolvable UseDirectPathFullLoad = null,
    bool|IResolvable UseLogminerReader = null,
    string UsePathPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectedNestedTables">AllowSelectedNestedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#allow_selected_nested_tables DmsEndpoint#allow_selected_nested_tables}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">AsmPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">AsmServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">AsmUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.convertTimestampWithZoneToUtc">ConvertTimestampWithZoneToUtc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#convert_timestamp_with_zone_to_utc DmsEndpoint#convert_timestamp_with_zone_to_utc}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">DirectPathNoLog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.failTaskOnLobTruncation">FailTaskOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#fail_task_on_lob_truncation DmsEndpoint#fail_task_on_lob_truncation}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.openTransactionWindow">OpenTransactionWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#open_transaction_window DmsEndpoint#open_transaction_window}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">RetryInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useBfile">UseBfile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_bfile DmsEndpoint#use_bfile}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">UseLogminerReader</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">UsePathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}. |

---

##### `AccessAlternateDirectly`<sup>Optional</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```csharp
public bool|IResolvable AccessAlternateDirectly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}.

---

##### `AdditionalArchivedLogDestId`<sup>Optional</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```csharp
public double AdditionalArchivedLogDestId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}.

---

##### `AddSupplementalLogging`<sup>Optional</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```csharp
public bool|IResolvable AddSupplementalLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}.

---

##### `AllowSelectedNestedTables`<sup>Optional</sup> <a name="AllowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectedNestedTables"></a>

```csharp
public bool|IResolvable AllowSelectedNestedTables { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#allow_selected_nested_tables DmsEndpoint#allow_selected_nested_tables}.

---

##### `ArchivedLogDestId`<sup>Optional</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```csharp
public double ArchivedLogDestId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}.

---

##### `ArchivedLogsOnly`<sup>Optional</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```csharp
public bool|IResolvable ArchivedLogsOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}.

---

##### `AsmPassword`<sup>Optional</sup> <a name="AsmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```csharp
public string AsmPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}.

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```csharp
public string AsmServer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}.

---

##### `AsmUser`<sup>Optional</sup> <a name="AsmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```csharp
public string AsmUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}.

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `CharLengthSemantics`<sup>Optional</sup> <a name="CharLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```csharp
public string CharLengthSemantics { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}.

---

##### `ConvertTimestampWithZoneToUtc`<sup>Optional</sup> <a name="ConvertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.convertTimestampWithZoneToUtc"></a>

```csharp
public bool|IResolvable ConvertTimestampWithZoneToUtc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#convert_timestamp_with_zone_to_utc DmsEndpoint#convert_timestamp_with_zone_to_utc}.

---

##### `DirectPathNoLog`<sup>Optional</sup> <a name="DirectPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```csharp
public bool|IResolvable DirectPathNoLog { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}.

---

##### `DirectPathParallelLoad`<sup>Optional</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```csharp
public bool|IResolvable DirectPathParallelLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}.

---

##### `EnableHomogenousTablespace`<sup>Optional</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespace { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}.

---

##### `ExtraArchivedLogDestIds`<sup>Optional</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```csharp
public double[] ExtraArchivedLogDestIds { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}.

---

##### `FailTaskOnLobTruncation`<sup>Optional</sup> <a name="FailTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.failTaskOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTaskOnLobTruncation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#fail_task_on_lob_truncation DmsEndpoint#fail_task_on_lob_truncation}.

---

##### `NumberDatatypeScale`<sup>Optional</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```csharp
public double NumberDatatypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}.

---

##### `OpenTransactionWindow`<sup>Optional</sup> <a name="OpenTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.openTransactionWindow"></a>

```csharp
public double OpenTransactionWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#open_transaction_window DmsEndpoint#open_transaction_window}.

---

##### `OraclePathPrefix`<sup>Optional</sup> <a name="OraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```csharp
public string OraclePathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}.

---

##### `ParallelAsmReadThreads`<sup>Optional</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```csharp
public double ParallelAsmReadThreads { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}.

---

##### `ReadAheadBlocks`<sup>Optional</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```csharp
public double ReadAheadBlocks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}.

---

##### `ReadTableSpaceName`<sup>Optional</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```csharp
public bool|IResolvable ReadTableSpaceName { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}.

---

##### `ReplacePathPrefix`<sup>Optional</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```csharp
public bool|IResolvable ReplacePathPrefix { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}.

---

##### `RetryInterval`<sup>Optional</sup> <a name="RetryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```csharp
public double RetryInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}.

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}.

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}.

---

##### `SecurityDbEncryption`<sup>Optional</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```csharp
public string SecurityDbEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}.

---

##### `SecurityDbEncryptionName`<sup>Optional</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```csharp
public string SecurityDbEncryptionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}.

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}.

---

##### `StandbyDelayTime`<sup>Optional</sup> <a name="StandbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```csharp
public double StandbyDelayTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}.

---

##### `TrimSpaceInChar`<sup>Optional</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.trimSpaceInChar"></a>

```csharp
public bool|IResolvable TrimSpaceInChar { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}.

---

##### `UseAlternateFolderForOnline`<sup>Optional</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}.

---

##### `UseBfile`<sup>Optional</sup> <a name="UseBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useBfile"></a>

```csharp
public bool|IResolvable UseBfile { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_bfile DmsEndpoint#use_bfile}.

---

##### `UseDirectPathFullLoad`<sup>Optional</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoad { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}.

---

##### `UseLogminerReader`<sup>Optional</sup> <a name="UseLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```csharp
public bool|IResolvable UseLogminerReader { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}.

---

##### `UsePathPrefix`<sup>Optional</sup> <a name="UsePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```csharp
public string UsePathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}.

---

### DmsEndpointPostgresSettings <a name="DmsEndpointPostgresSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointPostgresSettings {
    string AfterConnectScript = null,
    string AuthenticationMethod = null,
    string BabelfishDatabaseName = null,
    bool|IResolvable CaptureDdls = null,
    string DatabaseMode = null,
    string DdlArtifactsSchema = null,
    double ExecuteTimeout = null,
    bool|IResolvable FailTasksOnLobTruncation = null,
    bool|IResolvable HeartbeatEnable = null,
    double HeartbeatFrequency = null,
    string HeartbeatSchema = null,
    bool|IResolvable MapBooleanAsBoolean = null,
    bool|IResolvable MapJsonbAsClob = null,
    string MapLongVarcharAs = null,
    double MaxFileSize = null,
    string PluginName = null,
    string ServiceAccessRoleArn = null,
    string SlotName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls">CaptureDdls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob">MapJsonbAsClob</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs">MapLongVarcharAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName">PluginName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName">SlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}. |

---

##### `AfterConnectScript`<sup>Optional</sup> <a name="AfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}.

---

##### `AuthenticationMethod`<sup>Optional</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#authentication_method DmsEndpoint#authentication_method}.

---

##### `BabelfishDatabaseName`<sup>Optional</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}.

---

##### `CaptureDdls`<sup>Optional</sup> <a name="CaptureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.captureDdls"></a>

```csharp
public bool|IResolvable CaptureDdls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}.

---

##### `DatabaseMode`<sup>Optional</sup> <a name="DatabaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}.

---

##### `DdlArtifactsSchema`<sup>Optional</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}.

---

##### `ExecuteTimeout`<sup>Optional</sup> <a name="ExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}.

---

##### `FailTasksOnLobTruncation`<sup>Optional</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}.

---

##### `HeartbeatEnable`<sup>Optional</sup> <a name="HeartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatEnable"></a>

```csharp
public bool|IResolvable HeartbeatEnable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}.

---

##### `HeartbeatFrequency`<sup>Optional</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}.

---

##### `HeartbeatSchema`<sup>Optional</sup> <a name="HeartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}.

---

##### `MapBooleanAsBoolean`<sup>Optional</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}.

---

##### `MapJsonbAsClob`<sup>Optional</sup> <a name="MapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapJsonbAsClob"></a>

```csharp
public bool|IResolvable MapJsonbAsClob { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_jsonb_as_clob DmsEndpoint#map_jsonb_as_clob}.

---

##### `MapLongVarcharAs`<sup>Optional</sup> <a name="MapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.mapLongVarcharAs"></a>

```csharp
public string MapLongVarcharAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#map_long_varchar_as DmsEndpoint#map_long_varchar_as}.

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `PluginName`<sup>Optional</sup> <a name="PluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.pluginName"></a>

```csharp
public string PluginName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `SlotName`<sup>Optional</sup> <a name="SlotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings.property.slotName"></a>

```csharp
public string SlotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointRedisSettings {
    string AuthType,
    double Port,
    string ServerName,
    string AuthPassword = null,
    string AuthUserName = null,
    string SslCaCertificateArn = null,
    string SslSecurityProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">AuthPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">AuthUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `AuthPassword`<sup>Optional</sup> <a name="AuthPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```csharp
public string AuthPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `AuthUserName`<sup>Optional</sup> <a name="AuthUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```csharp
public string AuthUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `SslCaCertificateArn`<sup>Optional</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `SslSecurityProtocol`<sup>Optional</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointRedshiftSettings {
    string BucketFolder = null,
    string BucketName = null,
    string EncryptionMode = null,
    string ServerSideEncryptionKmsKeyId = null,
    string ServiceAccessRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `BucketFolder`<sup>Optional</sup> <a name="BucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `EncryptionMode`<sup>Optional</sup> <a name="EncryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `ServerSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `ServiceAccessRoleArn`<sup>Optional</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#create DmsEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointElasticsearchSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">ResetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">ResetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType">ResetUseNewMappingType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorRetryDuration` <a name="ResetErrorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```csharp
private void ResetErrorRetryDuration()
```

##### `ResetFullLoadErrorPercentage` <a name="ResetFullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```csharp
private void ResetFullLoadErrorPercentage()
```

##### `ResetUseNewMappingType` <a name="ResetUseNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetUseNewMappingType"></a>

```csharp
private void ResetUseNewMappingType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">EndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">ErrorRetryDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">FullLoadErrorPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput">UseNewMappingTypeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">ErrorRetryDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">FullLoadErrorPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType">UseNewMappingType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```csharp
public string EndpointUriInput { get; }
```

- *Type:* string

---

##### `ErrorRetryDurationInput`<sup>Optional</sup> <a name="ErrorRetryDurationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```csharp
public double ErrorRetryDurationInput { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentageInput`<sup>Optional</sup> <a name="FullLoadErrorPercentageInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```csharp
public double FullLoadErrorPercentageInput { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `UseNewMappingTypeInput`<sup>Optional</sup> <a name="UseNewMappingTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingTypeInput"></a>

```csharp
public bool|IResolvable UseNewMappingTypeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `ErrorRetryDuration`<sup>Required</sup> <a name="ErrorRetryDuration" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```csharp
public double ErrorRetryDuration { get; }
```

- *Type:* double

---

##### `FullLoadErrorPercentage`<sup>Required</sup> <a name="FullLoadErrorPercentage" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```csharp
public double FullLoadErrorPercentage { get; }
```

- *Type:* double

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `UseNewMappingType`<sup>Required</sup> <a name="UseNewMappingType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.useNewMappingType"></a>

```csharp
public bool|IResolvable UseNewMappingType { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointElasticsearchSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointKafkaSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">ResetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">ResetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism">ResetSaslMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">ResetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">ResetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">ResetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">ResetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">ResetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetMessageMaxBytes` <a name="ResetMessageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```csharp
private void ResetMessageMaxBytes()
```

##### `ResetNoHexPrefix` <a name="ResetNoHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```csharp
private void ResetNoHexPrefix()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetSaslMechanism` <a name="ResetSaslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslMechanism"></a>

```csharp
private void ResetSaslMechanism()
```

##### `ResetSaslPassword` <a name="ResetSaslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```csharp
private void ResetSaslPassword()
```

##### `ResetSaslUsername` <a name="ResetSaslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```csharp
private void ResetSaslUsername()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslClientCertificateArn` <a name="ResetSslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```csharp
private void ResetSslClientCertificateArn()
```

##### `ResetSslClientKeyArn` <a name="ResetSslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```csharp
private void ResetSslClientKeyArn()
```

##### `ResetSslClientKeyPassword` <a name="ResetSslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```csharp
private void ResetSslClientKeyPassword()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">BrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">MessageMaxBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">NoHexPrefixInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput">SaslMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">SaslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">SaslUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">SslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">SslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">SslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">Broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">MessageMaxBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">NoHexPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism">SaslMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">SaslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">SaslUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">SslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">SslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">SslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrokerInput`<sup>Optional</sup> <a name="BrokerInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```csharp
public string BrokerInput { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public bool|IResolvable IncludeControlDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public bool|IResolvable IncludeNullAndEmptyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public bool|IResolvable IncludePartitionValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public bool|IResolvable IncludeTransactionDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `MessageMaxBytesInput`<sup>Optional</sup> <a name="MessageMaxBytesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```csharp
public double MessageMaxBytesInput { get; }
```

- *Type:* double

---

##### `NoHexPrefixInput`<sup>Optional</sup> <a name="NoHexPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```csharp
public bool|IResolvable NoHexPrefixInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SaslMechanismInput`<sup>Optional</sup> <a name="SaslMechanismInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanismInput"></a>

```csharp
public string SaslMechanismInput { get; }
```

- *Type:* string

---

##### `SaslPasswordInput`<sup>Optional</sup> <a name="SaslPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```csharp
public string SaslPasswordInput { get; }
```

- *Type:* string

---

##### `SaslUsernameInput`<sup>Optional</sup> <a name="SaslUsernameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```csharp
public string SaslUsernameInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientCertificateArnInput`<sup>Optional</sup> <a name="SslClientCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```csharp
public string SslClientCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyArnInput`<sup>Optional</sup> <a name="SslClientKeyArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```csharp
public string SslClientKeyArnInput { get; }
```

- *Type:* string

---

##### `SslClientKeyPasswordInput`<sup>Optional</sup> <a name="SslClientKeyPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```csharp
public string SslClientKeyPasswordInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Broker`<sup>Required</sup> <a name="Broker" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```csharp
public string Broker { get; }
```

- *Type:* string

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `MessageMaxBytes`<sup>Required</sup> <a name="MessageMaxBytes" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```csharp
public double MessageMaxBytes { get; }
```

- *Type:* double

---

##### `NoHexPrefix`<sup>Required</sup> <a name="NoHexPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```csharp
public bool|IResolvable NoHexPrefix { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SaslMechanism`<sup>Required</sup> <a name="SaslMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslMechanism"></a>

```csharp
public string SaslMechanism { get; }
```

- *Type:* string

---

##### `SaslPassword`<sup>Required</sup> <a name="SaslPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```csharp
public string SaslPassword { get; }
```

- *Type:* string

---

##### `SaslUsername`<sup>Required</sup> <a name="SaslUsername" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```csharp
public string SaslUsername { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientCertificateArn`<sup>Required</sup> <a name="SslClientCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```csharp
public string SslClientCertificateArn { get; }
```

- *Type:* string

---

##### `SslClientKeyArn`<sup>Required</sup> <a name="SslClientKeyArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```csharp
public string SslClientKeyArn { get; }
```

- *Type:* string

---

##### `SslClientKeyPassword`<sup>Required</sup> <a name="SslClientKeyPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```csharp
public string SslClientKeyPassword { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointKafkaSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointKinesisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">ResetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">ResetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">ResetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">ResetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">ResetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">ResetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">ResetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue">ResetUseLargeIntegerValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeControlDetails` <a name="ResetIncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```csharp
private void ResetIncludeControlDetails()
```

##### `ResetIncludeNullAndEmpty` <a name="ResetIncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```csharp
private void ResetIncludeNullAndEmpty()
```

##### `ResetIncludePartitionValue` <a name="ResetIncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```csharp
private void ResetIncludePartitionValue()
```

##### `ResetIncludeTableAlterOperations` <a name="ResetIncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```csharp
private void ResetIncludeTableAlterOperations()
```

##### `ResetIncludeTransactionDetails` <a name="ResetIncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```csharp
private void ResetIncludeTransactionDetails()
```

##### `ResetMessageFormat` <a name="ResetMessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```csharp
private void ResetMessageFormat()
```

##### `ResetPartitionIncludeSchemaTable` <a name="ResetPartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```csharp
private void ResetPartitionIncludeSchemaTable()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```csharp
private void ResetStreamArn()
```

##### `ResetUseLargeIntegerValue` <a name="ResetUseLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetUseLargeIntegerValue"></a>

```csharp
private void ResetUseLargeIntegerValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">IncludeControlDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">IncludeNullAndEmptyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">IncludePartitionValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">IncludeTableAlterOperationsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">IncludeTransactionDetailsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">MessageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">PartitionIncludeSchemaTableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput">UseLargeIntegerValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">IncludeControlDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">IncludeNullAndEmpty</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">IncludePartitionValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">IncludeTableAlterOperations</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">IncludeTransactionDetails</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">MessageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">PartitionIncludeSchemaTable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue">UseLargeIntegerValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeControlDetailsInput`<sup>Optional</sup> <a name="IncludeControlDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```csharp
public bool|IResolvable IncludeControlDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmptyInput`<sup>Optional</sup> <a name="IncludeNullAndEmptyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```csharp
public bool|IResolvable IncludeNullAndEmptyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValueInput`<sup>Optional</sup> <a name="IncludePartitionValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```csharp
public bool|IResolvable IncludePartitionValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperationsInput`<sup>Optional</sup> <a name="IncludeTableAlterOperationsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperationsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetailsInput`<sup>Optional</sup> <a name="IncludeTransactionDetailsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```csharp
public bool|IResolvable IncludeTransactionDetailsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormatInput`<sup>Optional</sup> <a name="MessageFormatInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```csharp
public string MessageFormatInput { get; }
```

- *Type:* string

---

##### `PartitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="PartitionIncludeSchemaTableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `UseLargeIntegerValueInput`<sup>Optional</sup> <a name="UseLargeIntegerValueInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValueInput"></a>

```csharp
public bool|IResolvable UseLargeIntegerValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeControlDetails`<sup>Required</sup> <a name="IncludeControlDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```csharp
public bool|IResolvable IncludeControlDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeNullAndEmpty`<sup>Required</sup> <a name="IncludeNullAndEmpty" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```csharp
public bool|IResolvable IncludeNullAndEmpty { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludePartitionValue`<sup>Required</sup> <a name="IncludePartitionValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```csharp
public bool|IResolvable IncludePartitionValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTableAlterOperations`<sup>Required</sup> <a name="IncludeTableAlterOperations" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```csharp
public bool|IResolvable IncludeTableAlterOperations { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeTransactionDetails`<sup>Required</sup> <a name="IncludeTransactionDetails" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```csharp
public bool|IResolvable IncludeTransactionDetails { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageFormat`<sup>Required</sup> <a name="MessageFormat" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```csharp
public string MessageFormat { get; }
```

- *Type:* string

---

##### `PartitionIncludeSchemaTable`<sup>Required</sup> <a name="PartitionIncludeSchemaTable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```csharp
public bool|IResolvable PartitionIncludeSchemaTable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `UseLargeIntegerValue`<sup>Required</sup> <a name="UseLargeIntegerValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.useLargeIntegerValue"></a>

```csharp
public bool|IResolvable UseLargeIntegerValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointKinesisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointMongodbSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">ResetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">ResetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">ResetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetUseUpdateLookup">ResetUseUpdateLookup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```csharp
private void ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```csharp
private void ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetDocsToInvestigate` <a name="ResetDocsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```csharp
private void ResetDocsToInvestigate()
```

##### `ResetExtractDocId` <a name="ResetExtractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```csharp
private void ResetExtractDocId()
```

##### `ResetNestingLevel` <a name="ResetNestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```csharp
private void ResetNestingLevel()
```

##### `ResetUseUpdateLookup` <a name="ResetUseUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetUseUpdateLookup"></a>

```csharp
private void ResetUseUpdateLookup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">DocsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">ExtractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">NestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookupInput">UseUpdateLookupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">DocsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">ExtractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">NestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookup">UseUpdateLookup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```csharp
public string AuthMechanismInput { get; }
```

- *Type:* string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```csharp
public string AuthSourceInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `DocsToInvestigateInput`<sup>Optional</sup> <a name="DocsToInvestigateInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```csharp
public string DocsToInvestigateInput { get; }
```

- *Type:* string

---

##### `ExtractDocIdInput`<sup>Optional</sup> <a name="ExtractDocIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```csharp
public string ExtractDocIdInput { get; }
```

- *Type:* string

---

##### `NestingLevelInput`<sup>Optional</sup> <a name="NestingLevelInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```csharp
public string NestingLevelInput { get; }
```

- *Type:* string

---

##### `UseUpdateLookupInput`<sup>Optional</sup> <a name="UseUpdateLookupInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookupInput"></a>

```csharp
public bool|IResolvable UseUpdateLookupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```csharp
public string AuthMechanism { get; }
```

- *Type:* string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```csharp
public string AuthSource { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `DocsToInvestigate`<sup>Required</sup> <a name="DocsToInvestigate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```csharp
public string DocsToInvestigate { get; }
```

- *Type:* string

---

##### `ExtractDocId`<sup>Required</sup> <a name="ExtractDocId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```csharp
public string ExtractDocId { get; }
```

- *Type:* string

---

##### `NestingLevel`<sup>Required</sup> <a name="NestingLevel" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```csharp
public string NestingLevel { get; }
```

- *Type:* string

---

##### `UseUpdateLookup`<sup>Required</sup> <a name="UseUpdateLookup" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.useUpdateLookup"></a>

```csharp
public bool|IResolvable UseUpdateLookup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointMongodbSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointMysqlSettingsOutputReference <a name="DmsEndpointMysqlSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointMysqlSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">ResetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetEventsPollInterval">ResetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetExecuteTimeout">ResetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetParallelLoadThreads">ResetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServerTimezone">ResetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetTargetDbType">ResetTargetDbType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetAuthenticationMethod"></a>

```csharp
private void ResetAuthenticationMethod()
```

##### `ResetCleanSourceMetadataOnMismatch` <a name="ResetCleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```csharp
private void ResetCleanSourceMetadataOnMismatch()
```

##### `ResetEventsPollInterval` <a name="ResetEventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetEventsPollInterval"></a>

```csharp
private void ResetEventsPollInterval()
```

##### `ResetExecuteTimeout` <a name="ResetExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetExecuteTimeout"></a>

```csharp
private void ResetExecuteTimeout()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetParallelLoadThreads` <a name="ResetParallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetParallelLoadThreads"></a>

```csharp
private void ResetParallelLoadThreads()
```

##### `ResetServerTimezone` <a name="ResetServerTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServerTimezone"></a>

```csharp
private void ResetServerTimezone()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetTargetDbType` <a name="ResetTargetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.resetTargetDbType"></a>

```csharp
private void ResetTargetDbType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">CleanSourceMetadataOnMismatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollIntervalInput">EventsPollIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeoutInput">ExecuteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreadsInput">ParallelLoadThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezoneInput">ServerTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbTypeInput">TargetDbTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">CleanSourceMetadataOnMismatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollInterval">EventsPollInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreads">ParallelLoadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezone">ServerTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbType">TargetDbType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="CleanSourceMetadataOnMismatchInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventsPollIntervalInput`<sup>Optional</sup> <a name="EventsPollIntervalInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```csharp
public double EventsPollIntervalInput { get; }
```

- *Type:* double

---

##### `ExecuteTimeoutInput`<sup>Optional</sup> <a name="ExecuteTimeoutInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeoutInput"></a>

```csharp
public double ExecuteTimeoutInput { get; }
```

- *Type:* double

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `ParallelLoadThreadsInput`<sup>Optional</sup> <a name="ParallelLoadThreadsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```csharp
public double ParallelLoadThreadsInput { get; }
```

- *Type:* double

---

##### `ServerTimezoneInput`<sup>Optional</sup> <a name="ServerTimezoneInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezoneInput"></a>

```csharp
public string ServerTimezoneInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `TargetDbTypeInput`<sup>Optional</sup> <a name="TargetDbTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbTypeInput"></a>

```csharp
public string TargetDbTypeInput { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `CleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="CleanSourceMetadataOnMismatch" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```csharp
public bool|IResolvable CleanSourceMetadataOnMismatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventsPollInterval`<sup>Required</sup> <a name="EventsPollInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.eventsPollInterval"></a>

```csharp
public double EventsPollInterval { get; }
```

- *Type:* double

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; }
```

- *Type:* double

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `ParallelLoadThreads`<sup>Required</sup> <a name="ParallelLoadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.parallelLoadThreads"></a>

```csharp
public double ParallelLoadThreads { get; }
```

- *Type:* double

---

##### `ServerTimezone`<sup>Required</sup> <a name="ServerTimezone" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serverTimezone"></a>

```csharp
public string ServerTimezone { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `TargetDbType`<sup>Required</sup> <a name="TargetDbType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.targetDbType"></a>

```csharp
public string TargetDbType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointMysqlSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointMysqlSettings">DmsEndpointMysqlSettings</a>

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointOracleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly">ResetAccessAlternateDirectly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId">ResetAdditionalArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging">ResetAddSupplementalLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectedNestedTables">ResetAllowSelectedNestedTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId">ResetArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly">ResetArchivedLogsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword">ResetAsmPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer">ResetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser">ResetAsmUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics">ResetCharLengthSemantics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetConvertTimestampWithZoneToUtc">ResetConvertTimestampWithZoneToUtc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog">ResetDirectPathNoLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad">ResetDirectPathParallelLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace">ResetEnableHomogenousTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds">ResetExtraArchivedLogDestIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTaskOnLobTruncation">ResetFailTaskOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale">ResetNumberDatatypeScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOpenTransactionWindow">ResetOpenTransactionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix">ResetOraclePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads">ResetParallelAsmReadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks">ResetReadAheadBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName">ResetReadTableSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix">ResetReplacePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval">ResetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">ResetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">ResetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption">ResetSecurityDbEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName">ResetSecurityDbEncryptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName">ResetSpatialDataOptionToGeoJsonFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime">ResetStandbyDelayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetTrimSpaceInChar">ResetTrimSpaceInChar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline">ResetUseAlternateFolderForOnline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBfile">ResetUseBfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad">ResetUseDirectPathFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader">ResetUseLogminerReader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix">ResetUsePathPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessAlternateDirectly` <a name="ResetAccessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```csharp
private void ResetAccessAlternateDirectly()
```

##### `ResetAdditionalArchivedLogDestId` <a name="ResetAdditionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```csharp
private void ResetAdditionalArchivedLogDestId()
```

##### `ResetAddSupplementalLogging` <a name="ResetAddSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```csharp
private void ResetAddSupplementalLogging()
```

##### `ResetAllowSelectedNestedTables` <a name="ResetAllowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectedNestedTables"></a>

```csharp
private void ResetAllowSelectedNestedTables()
```

##### `ResetArchivedLogDestId` <a name="ResetArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```csharp
private void ResetArchivedLogDestId()
```

##### `ResetArchivedLogsOnly` <a name="ResetArchivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```csharp
private void ResetArchivedLogsOnly()
```

##### `ResetAsmPassword` <a name="ResetAsmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```csharp
private void ResetAsmPassword()
```

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```csharp
private void ResetAsmServer()
```

##### `ResetAsmUser` <a name="ResetAsmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```csharp
private void ResetAsmUser()
```

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAuthenticationMethod"></a>

```csharp
private void ResetAuthenticationMethod()
```

##### `ResetCharLengthSemantics` <a name="ResetCharLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```csharp
private void ResetCharLengthSemantics()
```

##### `ResetConvertTimestampWithZoneToUtc` <a name="ResetConvertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetConvertTimestampWithZoneToUtc"></a>

```csharp
private void ResetConvertTimestampWithZoneToUtc()
```

##### `ResetDirectPathNoLog` <a name="ResetDirectPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```csharp
private void ResetDirectPathNoLog()
```

##### `ResetDirectPathParallelLoad` <a name="ResetDirectPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```csharp
private void ResetDirectPathParallelLoad()
```

##### `ResetEnableHomogenousTablespace` <a name="ResetEnableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```csharp
private void ResetEnableHomogenousTablespace()
```

##### `ResetExtraArchivedLogDestIds` <a name="ResetExtraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```csharp
private void ResetExtraArchivedLogDestIds()
```

##### `ResetFailTaskOnLobTruncation` <a name="ResetFailTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTaskOnLobTruncation"></a>

```csharp
private void ResetFailTaskOnLobTruncation()
```

##### `ResetNumberDatatypeScale` <a name="ResetNumberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```csharp
private void ResetNumberDatatypeScale()
```

##### `ResetOpenTransactionWindow` <a name="ResetOpenTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOpenTransactionWindow"></a>

```csharp
private void ResetOpenTransactionWindow()
```

##### `ResetOraclePathPrefix` <a name="ResetOraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```csharp
private void ResetOraclePathPrefix()
```

##### `ResetParallelAsmReadThreads` <a name="ResetParallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```csharp
private void ResetParallelAsmReadThreads()
```

##### `ResetReadAheadBlocks` <a name="ResetReadAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```csharp
private void ResetReadAheadBlocks()
```

##### `ResetReadTableSpaceName` <a name="ResetReadTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```csharp
private void ResetReadTableSpaceName()
```

##### `ResetReplacePathPrefix` <a name="ResetReplacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```csharp
private void ResetReplacePathPrefix()
```

##### `ResetRetryInterval` <a name="ResetRetryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```csharp
private void ResetRetryInterval()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```csharp
private void ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecurityDbEncryption` <a name="ResetSecurityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```csharp
private void ResetSecurityDbEncryption()
```

##### `ResetSecurityDbEncryptionName` <a name="ResetSecurityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```csharp
private void ResetSecurityDbEncryptionName()
```

##### `ResetSpatialDataOptionToGeoJsonFunctionName` <a name="ResetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```csharp
private void ResetSpatialDataOptionToGeoJsonFunctionName()
```

##### `ResetStandbyDelayTime` <a name="ResetStandbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```csharp
private void ResetStandbyDelayTime()
```

##### `ResetTrimSpaceInChar` <a name="ResetTrimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetTrimSpaceInChar"></a>

```csharp
private void ResetTrimSpaceInChar()
```

##### `ResetUseAlternateFolderForOnline` <a name="ResetUseAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```csharp
private void ResetUseAlternateFolderForOnline()
```

##### `ResetUseBfile` <a name="ResetUseBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBfile"></a>

```csharp
private void ResetUseBfile()
```

##### `ResetUseDirectPathFullLoad` <a name="ResetUseDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```csharp
private void ResetUseDirectPathFullLoad()
```

##### `ResetUseLogminerReader` <a name="ResetUseLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```csharp
private void ResetUseLogminerReader()
```

##### `ResetUsePathPrefix` <a name="ResetUsePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```csharp
private void ResetUsePathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">AccessAlternateDirectlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">AdditionalArchivedLogDestIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">AddSupplementalLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTablesInput">AllowSelectedNestedTablesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">ArchivedLogDestIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">ArchivedLogsOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">AsmPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">AsmUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">CharLengthSemanticsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtcInput">ConvertTimestampWithZoneToUtcInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">DirectPathNoLogInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">DirectPathParallelLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">EnableHomogenousTablespaceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">ExtraArchivedLogDestIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncationInput">FailTaskOnLobTruncationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">NumberDatatypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindowInput">OpenTransactionWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">OraclePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">ParallelAsmReadThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">ReadAheadBlocksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">ReadTableSpaceNameInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">ReplacePathPrefixInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">RetryIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">SecurityDbEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">SecurityDbEncryptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">SpatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">StandbyDelayTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInCharInput">TrimSpaceInCharInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">UseAlternateFolderForOnlineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfileInput">UseBfileInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">UseDirectPathFullLoadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">UseLogminerReaderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">UsePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">AccessAlternateDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">AdditionalArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">AddSupplementalLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTables">AllowSelectedNestedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">ArchivedLogDestId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">ArchivedLogsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">AsmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">AsmUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">CharLengthSemantics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtc">ConvertTimestampWithZoneToUtc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">DirectPathNoLog</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">DirectPathParallelLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">EnableHomogenousTablespace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">ExtraArchivedLogDestIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncation">FailTaskOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">NumberDatatypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindow">OpenTransactionWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">OraclePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">ParallelAsmReadThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">ReadAheadBlocks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">ReadTableSpaceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">ReplacePathPrefix</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">RetryInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">SecurityDbEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">SecurityDbEncryptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">SpatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">StandbyDelayTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInChar">TrimSpaceInChar</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">UseAlternateFolderForOnline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfile">UseBfile</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">UseDirectPathFullLoad</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">UseLogminerReader</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">UsePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessAlternateDirectlyInput`<sup>Optional</sup> <a name="AccessAlternateDirectlyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```csharp
public bool|IResolvable AccessAlternateDirectlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="AdditionalArchivedLogDestIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```csharp
public double AdditionalArchivedLogDestIdInput { get; }
```

- *Type:* double

---

##### `AddSupplementalLoggingInput`<sup>Optional</sup> <a name="AddSupplementalLoggingInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```csharp
public bool|IResolvable AddSupplementalLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowSelectedNestedTablesInput`<sup>Optional</sup> <a name="AllowSelectedNestedTablesInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTablesInput"></a>

```csharp
public bool|IResolvable AllowSelectedNestedTablesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ArchivedLogDestIdInput`<sup>Optional</sup> <a name="ArchivedLogDestIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```csharp
public double ArchivedLogDestIdInput { get; }
```

- *Type:* double

---

##### `ArchivedLogsOnlyInput`<sup>Optional</sup> <a name="ArchivedLogsOnlyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```csharp
public bool|IResolvable ArchivedLogsOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AsmPasswordInput`<sup>Optional</sup> <a name="AsmPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```csharp
public string AsmPasswordInput { get; }
```

- *Type:* string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```csharp
public string AsmServerInput { get; }
```

- *Type:* string

---

##### `AsmUserInput`<sup>Optional</sup> <a name="AsmUserInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```csharp
public string AsmUserInput { get; }
```

- *Type:* string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `CharLengthSemanticsInput`<sup>Optional</sup> <a name="CharLengthSemanticsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```csharp
public string CharLengthSemanticsInput { get; }
```

- *Type:* string

---

##### `ConvertTimestampWithZoneToUtcInput`<sup>Optional</sup> <a name="ConvertTimestampWithZoneToUtcInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtcInput"></a>

```csharp
public bool|IResolvable ConvertTimestampWithZoneToUtcInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathNoLogInput`<sup>Optional</sup> <a name="DirectPathNoLogInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```csharp
public bool|IResolvable DirectPathNoLogInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathParallelLoadInput`<sup>Optional</sup> <a name="DirectPathParallelLoadInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```csharp
public bool|IResolvable DirectPathParallelLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHomogenousTablespaceInput`<sup>Optional</sup> <a name="EnableHomogenousTablespaceInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespaceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="ExtraArchivedLogDestIdsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```csharp
public double[] ExtraArchivedLogDestIdsInput { get; }
```

- *Type:* double[]

---

##### `FailTaskOnLobTruncationInput`<sup>Optional</sup> <a name="FailTaskOnLobTruncationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncationInput"></a>

```csharp
public bool|IResolvable FailTaskOnLobTruncationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberDatatypeScaleInput`<sup>Optional</sup> <a name="NumberDatatypeScaleInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```csharp
public double NumberDatatypeScaleInput { get; }
```

- *Type:* double

---

##### `OpenTransactionWindowInput`<sup>Optional</sup> <a name="OpenTransactionWindowInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindowInput"></a>

```csharp
public double OpenTransactionWindowInput { get; }
```

- *Type:* double

---

##### `OraclePathPrefixInput`<sup>Optional</sup> <a name="OraclePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```csharp
public string OraclePathPrefixInput { get; }
```

- *Type:* string

---

##### `ParallelAsmReadThreadsInput`<sup>Optional</sup> <a name="ParallelAsmReadThreadsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```csharp
public double ParallelAsmReadThreadsInput { get; }
```

- *Type:* double

---

##### `ReadAheadBlocksInput`<sup>Optional</sup> <a name="ReadAheadBlocksInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```csharp
public double ReadAheadBlocksInput { get; }
```

- *Type:* double

---

##### `ReadTableSpaceNameInput`<sup>Optional</sup> <a name="ReadTableSpaceNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```csharp
public bool|IResolvable ReadTableSpaceNameInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplacePathPrefixInput`<sup>Optional</sup> <a name="ReplacePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```csharp
public bool|IResolvable ReplacePathPrefixInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetryIntervalInput`<sup>Optional</sup> <a name="RetryIntervalInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```csharp
public double RetryIntervalInput { get; }
```

- *Type:* double

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```csharp
public string SecretsManagerOracleAsmSecretIdInput { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionInput`<sup>Optional</sup> <a name="SecurityDbEncryptionInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```csharp
public string SecurityDbEncryptionInput { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionNameInput`<sup>Optional</sup> <a name="SecurityDbEncryptionNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```csharp
public string SecurityDbEncryptionNameInput { get; }
```

- *Type:* string

---

##### `SpatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="SpatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionNameInput { get; }
```

- *Type:* string

---

##### `StandbyDelayTimeInput`<sup>Optional</sup> <a name="StandbyDelayTimeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```csharp
public double StandbyDelayTimeInput { get; }
```

- *Type:* double

---

##### `TrimSpaceInCharInput`<sup>Optional</sup> <a name="TrimSpaceInCharInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInCharInput"></a>

```csharp
public bool|IResolvable TrimSpaceInCharInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="UseAlternateFolderForOnlineInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnlineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBfileInput`<sup>Optional</sup> <a name="UseBfileInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfileInput"></a>

```csharp
public bool|IResolvable UseBfileInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseDirectPathFullLoadInput`<sup>Optional</sup> <a name="UseDirectPathFullLoadInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLogminerReaderInput`<sup>Optional</sup> <a name="UseLogminerReaderInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```csharp
public bool|IResolvable UseLogminerReaderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsePathPrefixInput`<sup>Optional</sup> <a name="UsePathPrefixInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```csharp
public string UsePathPrefixInput { get; }
```

- *Type:* string

---

##### `AccessAlternateDirectly`<sup>Required</sup> <a name="AccessAlternateDirectly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```csharp
public bool|IResolvable AccessAlternateDirectly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalArchivedLogDestId`<sup>Required</sup> <a name="AdditionalArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```csharp
public double AdditionalArchivedLogDestId { get; }
```

- *Type:* double

---

##### `AddSupplementalLogging`<sup>Required</sup> <a name="AddSupplementalLogging" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```csharp
public bool|IResolvable AddSupplementalLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowSelectedNestedTables`<sup>Required</sup> <a name="AllowSelectedNestedTables" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectedNestedTables"></a>

```csharp
public bool|IResolvable AllowSelectedNestedTables { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ArchivedLogDestId`<sup>Required</sup> <a name="ArchivedLogDestId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```csharp
public double ArchivedLogDestId { get; }
```

- *Type:* double

---

##### `ArchivedLogsOnly`<sup>Required</sup> <a name="ArchivedLogsOnly" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```csharp
public bool|IResolvable ArchivedLogsOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AsmPassword`<sup>Required</sup> <a name="AsmPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```csharp
public string AsmPassword { get; }
```

- *Type:* string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```csharp
public string AsmServer { get; }
```

- *Type:* string

---

##### `AsmUser`<sup>Required</sup> <a name="AsmUser" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```csharp
public string AsmUser { get; }
```

- *Type:* string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `CharLengthSemantics`<sup>Required</sup> <a name="CharLengthSemantics" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```csharp
public string CharLengthSemantics { get; }
```

- *Type:* string

---

##### `ConvertTimestampWithZoneToUtc`<sup>Required</sup> <a name="ConvertTimestampWithZoneToUtc" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.convertTimestampWithZoneToUtc"></a>

```csharp
public bool|IResolvable ConvertTimestampWithZoneToUtc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathNoLog`<sup>Required</sup> <a name="DirectPathNoLog" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```csharp
public bool|IResolvable DirectPathNoLog { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DirectPathParallelLoad`<sup>Required</sup> <a name="DirectPathParallelLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```csharp
public bool|IResolvable DirectPathParallelLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableHomogenousTablespace`<sup>Required</sup> <a name="EnableHomogenousTablespace" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```csharp
public bool|IResolvable EnableHomogenousTablespace { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExtraArchivedLogDestIds`<sup>Required</sup> <a name="ExtraArchivedLogDestIds" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```csharp
public double[] ExtraArchivedLogDestIds { get; }
```

- *Type:* double[]

---

##### `FailTaskOnLobTruncation`<sup>Required</sup> <a name="FailTaskOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTaskOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTaskOnLobTruncation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberDatatypeScale`<sup>Required</sup> <a name="NumberDatatypeScale" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```csharp
public double NumberDatatypeScale { get; }
```

- *Type:* double

---

##### `OpenTransactionWindow`<sup>Required</sup> <a name="OpenTransactionWindow" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.openTransactionWindow"></a>

```csharp
public double OpenTransactionWindow { get; }
```

- *Type:* double

---

##### `OraclePathPrefix`<sup>Required</sup> <a name="OraclePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```csharp
public string OraclePathPrefix { get; }
```

- *Type:* string

---

##### `ParallelAsmReadThreads`<sup>Required</sup> <a name="ParallelAsmReadThreads" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```csharp
public double ParallelAsmReadThreads { get; }
```

- *Type:* double

---

##### `ReadAheadBlocks`<sup>Required</sup> <a name="ReadAheadBlocks" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```csharp
public double ReadAheadBlocks { get; }
```

- *Type:* double

---

##### `ReadTableSpaceName`<sup>Required</sup> <a name="ReadTableSpaceName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```csharp
public bool|IResolvable ReadTableSpaceName { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplacePathPrefix`<sup>Required</sup> <a name="ReplacePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```csharp
public bool|IResolvable ReplacePathPrefix { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetryInterval`<sup>Required</sup> <a name="RetryInterval" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```csharp
public double RetryInterval { get; }
```

- *Type:* double

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```csharp
public string SecretsManagerOracleAsmAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```csharp
public string SecretsManagerOracleAsmSecretId { get; }
```

- *Type:* string

---

##### `SecurityDbEncryption`<sup>Required</sup> <a name="SecurityDbEncryption" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```csharp
public string SecurityDbEncryption { get; }
```

- *Type:* string

---

##### `SecurityDbEncryptionName`<sup>Required</sup> <a name="SecurityDbEncryptionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```csharp
public string SecurityDbEncryptionName { get; }
```

- *Type:* string

---

##### `SpatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="SpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```csharp
public string SpatialDataOptionToGeoJsonFunctionName { get; }
```

- *Type:* string

---

##### `StandbyDelayTime`<sup>Required</sup> <a name="StandbyDelayTime" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```csharp
public double StandbyDelayTime { get; }
```

- *Type:* double

---

##### `TrimSpaceInChar`<sup>Required</sup> <a name="TrimSpaceInChar" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.trimSpaceInChar"></a>

```csharp
public bool|IResolvable TrimSpaceInChar { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseAlternateFolderForOnline`<sup>Required</sup> <a name="UseAlternateFolderForOnline" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```csharp
public bool|IResolvable UseAlternateFolderForOnline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseBfile`<sup>Required</sup> <a name="UseBfile" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBfile"></a>

```csharp
public bool|IResolvable UseBfile { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseDirectPathFullLoad`<sup>Required</sup> <a name="UseDirectPathFullLoad" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```csharp
public bool|IResolvable UseDirectPathFullLoad { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseLogminerReader`<sup>Required</sup> <a name="UseLogminerReader" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```csharp
public bool|IResolvable UseLogminerReader { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsePathPrefix`<sup>Required</sup> <a name="UsePathPrefix" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```csharp
public string UsePathPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointOracleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---


### DmsEndpointPostgresSettingsOutputReference <a name="DmsEndpointPostgresSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointPostgresSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript">ResetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAuthenticationMethod">ResetAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName">ResetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls">ResetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode">ResetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema">ResetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout">ResetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation">ResetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable">ResetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency">ResetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema">ResetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean">ResetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob">ResetMapJsonbAsClob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs">ResetMapLongVarcharAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName">ResetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName">ResetSlotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterConnectScript` <a name="ResetAfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAfterConnectScript"></a>

```csharp
private void ResetAfterConnectScript()
```

##### `ResetAuthenticationMethod` <a name="ResetAuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetAuthenticationMethod"></a>

```csharp
private void ResetAuthenticationMethod()
```

##### `ResetBabelfishDatabaseName` <a name="ResetBabelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetBabelfishDatabaseName"></a>

```csharp
private void ResetBabelfishDatabaseName()
```

##### `ResetCaptureDdls` <a name="ResetCaptureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetCaptureDdls"></a>

```csharp
private void ResetCaptureDdls()
```

##### `ResetDatabaseMode` <a name="ResetDatabaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDatabaseMode"></a>

```csharp
private void ResetDatabaseMode()
```

##### `ResetDdlArtifactsSchema` <a name="ResetDdlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetDdlArtifactsSchema"></a>

```csharp
private void ResetDdlArtifactsSchema()
```

##### `ResetExecuteTimeout` <a name="ResetExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetExecuteTimeout"></a>

```csharp
private void ResetExecuteTimeout()
```

##### `ResetFailTasksOnLobTruncation` <a name="ResetFailTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```csharp
private void ResetFailTasksOnLobTruncation()
```

##### `ResetHeartbeatEnable` <a name="ResetHeartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatEnable"></a>

```csharp
private void ResetHeartbeatEnable()
```

##### `ResetHeartbeatFrequency` <a name="ResetHeartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatFrequency"></a>

```csharp
private void ResetHeartbeatFrequency()
```

##### `ResetHeartbeatSchema` <a name="ResetHeartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetHeartbeatSchema"></a>

```csharp
private void ResetHeartbeatSchema()
```

##### `ResetMapBooleanAsBoolean` <a name="ResetMapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```csharp
private void ResetMapBooleanAsBoolean()
```

##### `ResetMapJsonbAsClob` <a name="ResetMapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapJsonbAsClob"></a>

```csharp
private void ResetMapJsonbAsClob()
```

##### `ResetMapLongVarcharAs` <a name="ResetMapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMapLongVarcharAs"></a>

```csharp
private void ResetMapLongVarcharAs()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetPluginName` <a name="ResetPluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetPluginName"></a>

```csharp
private void ResetPluginName()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```

##### `ResetSlotName` <a name="ResetSlotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.resetSlotName"></a>

```csharp
private void ResetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput">AfterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethodInput">AuthenticationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput">BabelfishDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput">CaptureDdlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput">DatabaseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput">DdlArtifactsSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput">ExecuteTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput">FailTasksOnLobTruncationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput">HeartbeatEnableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput">HeartbeatFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput">HeartbeatSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput">MapBooleanAsBooleanInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput">MapJsonbAsClobInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput">MapLongVarcharAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput">PluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput">SlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript">AfterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethod">AuthenticationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName">BabelfishDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls">CaptureDdls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode">DatabaseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema">DdlArtifactsSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout">ExecuteTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation">FailTasksOnLobTruncation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable">HeartbeatEnable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency">HeartbeatFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema">HeartbeatSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean">MapBooleanAsBoolean</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob">MapJsonbAsClob</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs">MapLongVarcharAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName">PluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName">SlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterConnectScriptInput`<sup>Optional</sup> <a name="AfterConnectScriptInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScriptInput"></a>

```csharp
public string AfterConnectScriptInput { get; }
```

- *Type:* string

---

##### `AuthenticationMethodInput`<sup>Optional</sup> <a name="AuthenticationMethodInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethodInput"></a>

```csharp
public string AuthenticationMethodInput { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseNameInput`<sup>Optional</sup> <a name="BabelfishDatabaseNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```csharp
public string BabelfishDatabaseNameInput { get; }
```

- *Type:* string

---

##### `CaptureDdlsInput`<sup>Optional</sup> <a name="CaptureDdlsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdlsInput"></a>

```csharp
public bool|IResolvable CaptureDdlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseModeInput`<sup>Optional</sup> <a name="DatabaseModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseModeInput"></a>

```csharp
public string DatabaseModeInput { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchemaInput`<sup>Optional</sup> <a name="DdlArtifactsSchemaInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```csharp
public string DdlArtifactsSchemaInput { get; }
```

- *Type:* string

---

##### `ExecuteTimeoutInput`<sup>Optional</sup> <a name="ExecuteTimeoutInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeoutInput"></a>

```csharp
public double ExecuteTimeoutInput { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncationInput`<sup>Optional</sup> <a name="FailTasksOnLobTruncationInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatEnableInput`<sup>Optional</sup> <a name="HeartbeatEnableInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnableInput"></a>

```csharp
public bool|IResolvable HeartbeatEnableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatFrequencyInput`<sup>Optional</sup> <a name="HeartbeatFrequencyInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```csharp
public double HeartbeatFrequencyInput { get; }
```

- *Type:* double

---

##### `HeartbeatSchemaInput`<sup>Optional</sup> <a name="HeartbeatSchemaInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchemaInput"></a>

```csharp
public string HeartbeatSchemaInput { get; }
```

- *Type:* string

---

##### `MapBooleanAsBooleanInput`<sup>Optional</sup> <a name="MapBooleanAsBooleanInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```csharp
public bool|IResolvable MapBooleanAsBooleanInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapJsonbAsClobInput`<sup>Optional</sup> <a name="MapJsonbAsClobInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClobInput"></a>

```csharp
public bool|IResolvable MapJsonbAsClobInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapLongVarcharAsInput`<sup>Optional</sup> <a name="MapLongVarcharAsInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAsInput"></a>

```csharp
public string MapLongVarcharAsInput { get; }
```

- *Type:* string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginNameInput"></a>

```csharp
public string PluginNameInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotNameInput"></a>

```csharp
public string SlotNameInput { get; }
```

- *Type:* string

---

##### `AfterConnectScript`<sup>Required</sup> <a name="AfterConnectScript" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.afterConnectScript"></a>

```csharp
public string AfterConnectScript { get; }
```

- *Type:* string

---

##### `AuthenticationMethod`<sup>Required</sup> <a name="AuthenticationMethod" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.authenticationMethod"></a>

```csharp
public string AuthenticationMethod { get; }
```

- *Type:* string

---

##### `BabelfishDatabaseName`<sup>Required</sup> <a name="BabelfishDatabaseName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.babelfishDatabaseName"></a>

```csharp
public string BabelfishDatabaseName { get; }
```

- *Type:* string

---

##### `CaptureDdls`<sup>Required</sup> <a name="CaptureDdls" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.captureDdls"></a>

```csharp
public bool|IResolvable CaptureDdls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseMode`<sup>Required</sup> <a name="DatabaseMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.databaseMode"></a>

```csharp
public string DatabaseMode { get; }
```

- *Type:* string

---

##### `DdlArtifactsSchema`<sup>Required</sup> <a name="DdlArtifactsSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.ddlArtifactsSchema"></a>

```csharp
public string DdlArtifactsSchema { get; }
```

- *Type:* string

---

##### `ExecuteTimeout`<sup>Required</sup> <a name="ExecuteTimeout" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.executeTimeout"></a>

```csharp
public double ExecuteTimeout { get; }
```

- *Type:* double

---

##### `FailTasksOnLobTruncation`<sup>Required</sup> <a name="FailTasksOnLobTruncation" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```csharp
public bool|IResolvable FailTasksOnLobTruncation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatEnable`<sup>Required</sup> <a name="HeartbeatEnable" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatEnable"></a>

```csharp
public bool|IResolvable HeartbeatEnable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeartbeatFrequency`<sup>Required</sup> <a name="HeartbeatFrequency" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatFrequency"></a>

```csharp
public double HeartbeatFrequency { get; }
```

- *Type:* double

---

##### `HeartbeatSchema`<sup>Required</sup> <a name="HeartbeatSchema" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.heartbeatSchema"></a>

```csharp
public string HeartbeatSchema { get; }
```

- *Type:* string

---

##### `MapBooleanAsBoolean`<sup>Required</sup> <a name="MapBooleanAsBoolean" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```csharp
public bool|IResolvable MapBooleanAsBoolean { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapJsonbAsClob`<sup>Required</sup> <a name="MapJsonbAsClob" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapJsonbAsClob"></a>

```csharp
public bool|IResolvable MapJsonbAsClob { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MapLongVarcharAs`<sup>Required</sup> <a name="MapLongVarcharAs" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.mapLongVarcharAs"></a>

```csharp
public string MapLongVarcharAs { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.pluginName"></a>

```csharp
public string PluginName { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.slotName"></a>

```csharp
public string SlotName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointPostgresSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointPostgresSettings">DmsEndpointPostgresSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointRedisSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">ResetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">ResetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">ResetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">ResetSslSecurityProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthPassword` <a name="ResetAuthPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```csharp
private void ResetAuthPassword()
```

##### `ResetAuthUserName` <a name="ResetAuthUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```csharp
private void ResetAuthUserName()
```

##### `ResetSslCaCertificateArn` <a name="ResetSslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```csharp
private void ResetSslCaCertificateArn()
```

##### `ResetSslSecurityProtocol` <a name="ResetSslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```csharp
private void ResetSslSecurityProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">AuthPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">AuthUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">SslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">SslSecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">AuthPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">AuthUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">SslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">SslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthPasswordInput`<sup>Optional</sup> <a name="AuthPasswordInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```csharp
public string AuthPasswordInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthUserNameInput`<sup>Optional</sup> <a name="AuthUserNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```csharp
public string AuthUserNameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SslCaCertificateArnInput`<sup>Optional</sup> <a name="SslCaCertificateArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```csharp
public string SslCaCertificateArnInput { get; }
```

- *Type:* string

---

##### `SslSecurityProtocolInput`<sup>Optional</sup> <a name="SslSecurityProtocolInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```csharp
public string SslSecurityProtocolInput { get; }
```

- *Type:* string

---

##### `AuthPassword`<sup>Required</sup> <a name="AuthPassword" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```csharp
public string AuthPassword { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```csharp
public string AuthUserName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SslCaCertificateArn`<sup>Required</sup> <a name="SslCaCertificateArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```csharp
public string SslCaCertificateArn { get; }
```

- *Type:* string

---

##### `SslSecurityProtocol`<sup>Required</sup> <a name="SslSecurityProtocol" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```csharp
public string SslSecurityProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointRedisSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointRedshiftSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">ResetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">ResetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">ResetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">ResetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketFolder` <a name="ResetBucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```csharp
private void ResetBucketFolder()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetEncryptionMode` <a name="ResetEncryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```csharp
private void ResetEncryptionMode()
```

##### `ResetServerSideEncryptionKmsKeyId` <a name="ResetServerSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```csharp
private void ResetServerSideEncryptionKmsKeyId()
```

##### `ResetServiceAccessRoleArn` <a name="ResetServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```csharp
private void ResetServiceAccessRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">ServerSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">ServerSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketFolderInput`<sup>Optional</sup> <a name="BucketFolderInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```csharp
public string BucketFolderInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EncryptionModeInput`<sup>Optional</sup> <a name="EncryptionModeInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```csharp
public string EncryptionModeInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="ServerSideEncryptionKmsKeyIdInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```csharp
public string ServerSideEncryptionKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```csharp
public string ServiceAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `BucketFolder`<sup>Required</sup> <a name="BucketFolder" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```csharp
public string BucketFolder { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```csharp
public string EncryptionMode { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionKmsKeyId`<sup>Required</sup> <a name="ServerSideEncryptionKmsKeyId" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```csharp
public string ServerSideEncryptionKmsKeyId { get; }
```

- *Type:* string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```csharp
public string ServiceAccessRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```csharp
public DmsEndpointRedshiftSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---



