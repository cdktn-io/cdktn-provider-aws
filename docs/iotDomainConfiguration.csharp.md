# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktn/provider-aws.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfiguration(Construct Scope, string Id, IotDomainConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">PutAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol">ResetApplicationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">ResetAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">ResetServerCertificateArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">ResetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">ResetValidationCertificateArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizerConfig` <a name="PutAuthorizerConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```csharp
private void PutAuthorizerConfig(IotDomainConfigurationAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```csharp
private void PutTlsConfig(IotDomainConfigurationTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `ResetApplicationProtocol` <a name="ResetApplicationProtocol" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol"></a>

```csharp
private void ResetApplicationProtocol()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetAuthorizerConfig` <a name="ResetAuthorizerConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```csharp
private void ResetAuthorizerConfig()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerCertificateArns` <a name="ResetServerCertificateArns" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```csharp
private void ResetServerCertificateArns()
```

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```csharp
private void ResetServiceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```

##### `ResetValidationCertificateArn` <a name="ResetValidationCertificateArn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```csharp
private void ResetValidationCertificateArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IotDomainConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IotDomainConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IotDomainConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

IotDomainConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">AuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType">DomainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput">ApplicationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">AuthorizerConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">ServerCertificateArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">ValidationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol">ApplicationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">ServerCertificateArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">ValidationCertificateArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthorizerConfig`<sup>Required</sup> <a name="AuthorizerConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```csharp
public IotDomainConfigurationAuthorizerConfigOutputReference AuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `DomainType`<sup>Required</sup> <a name="DomainType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```csharp
public string DomainType { get; }
```

- *Type:* string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```csharp
public IotDomainConfigurationTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `ApplicationProtocolInput`<sup>Optional</sup> <a name="ApplicationProtocolInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput"></a>

```csharp
public string ApplicationProtocolInput { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizerConfigInput`<sup>Optional</sup> <a name="AuthorizerConfigInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```csharp
public IotDomainConfigurationAuthorizerConfig AuthorizerConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerCertificateArnsInput`<sup>Optional</sup> <a name="ServerCertificateArnsInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```csharp
public string[] ServerCertificateArnsInput { get; }
```

- *Type:* string[]

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```csharp
public IotDomainConfigurationTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `ValidationCertificateArnInput`<sup>Optional</sup> <a name="ValidationCertificateArnInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```csharp
public string ValidationCertificateArnInput { get; }
```

- *Type:* string

---

##### `ApplicationProtocol`<sup>Required</sup> <a name="ApplicationProtocol" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol"></a>

```csharp
public string ApplicationProtocol { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerCertificateArns`<sup>Required</sup> <a name="ServerCertificateArns" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```csharp
public string[] ServerCertificateArns { get; }
```

- *Type:* string[]

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidationCertificateArn`<sup>Required</sup> <a name="ValidationCertificateArn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```csharp
public string ValidationCertificateArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfigurationAuthorizerConfig {
    bool|IResolvable AllowAuthorizerOverride = null,
    string DefaultAuthorizerName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">AllowAuthorizerOverride</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">DefaultAuthorizerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `AllowAuthorizerOverride`<sup>Optional</sup> <a name="AllowAuthorizerOverride" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```csharp
public bool|IResolvable AllowAuthorizerOverride { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `DefaultAuthorizerName`<sup>Optional</sup> <a name="DefaultAuthorizerName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```csharp
public string DefaultAuthorizerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ApplicationProtocol = null,
    string AuthenticationType = null,
    IotDomainConfigurationAuthorizerConfig AuthorizerConfig = null,
    string DomainName = null,
    string Id = null,
    string Region = null,
    string[] ServerCertificateArns = null,
    string ServiceType = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IotDomainConfigurationTlsConfig TlsConfig = null,
    string ValidationCertificateArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol">ApplicationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">AuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">ServerCertificateArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">ServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">ValidationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `ApplicationProtocol`<sup>Optional</sup> <a name="ApplicationProtocol" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol"></a>

```csharp
public string ApplicationProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}.

---

##### `AuthorizerConfig`<sup>Optional</sup> <a name="AuthorizerConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```csharp
public IotDomainConfigurationAuthorizerConfig AuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#region IotDomainConfiguration#region}

---

##### `ServerCertificateArns`<sup>Optional</sup> <a name="ServerCertificateArns" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```csharp
public string[] ServerCertificateArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```csharp
public IotDomainConfigurationTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `ValidationCertificateArn`<sup>Optional</sup> <a name="ValidationCertificateArn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```csharp
public string ValidationCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfigurationTlsConfig {
    string SecurityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfigurationAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">ResetAllowAuthorizerOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">ResetDefaultAuthorizerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAuthorizerOverride` <a name="ResetAllowAuthorizerOverride" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```csharp
private void ResetAllowAuthorizerOverride()
```

##### `ResetDefaultAuthorizerName` <a name="ResetDefaultAuthorizerName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```csharp
private void ResetDefaultAuthorizerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">AllowAuthorizerOverrideInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">DefaultAuthorizerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">AllowAuthorizerOverride</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">DefaultAuthorizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAuthorizerOverrideInput`<sup>Optional</sup> <a name="AllowAuthorizerOverrideInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```csharp
public bool|IResolvable AllowAuthorizerOverrideInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultAuthorizerNameInput`<sup>Optional</sup> <a name="DefaultAuthorizerNameInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```csharp
public string DefaultAuthorizerNameInput { get; }
```

- *Type:* string

---

##### `AllowAuthorizerOverride`<sup>Required</sup> <a name="AllowAuthorizerOverride" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```csharp
public bool|IResolvable AllowAuthorizerOverride { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultAuthorizerName`<sup>Required</sup> <a name="DefaultAuthorizerName" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```csharp
public string DefaultAuthorizerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public IotDomainConfigurationAuthorizerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new IotDomainConfigurationTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```csharp
public IotDomainConfigurationTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



