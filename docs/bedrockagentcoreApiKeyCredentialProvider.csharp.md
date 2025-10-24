# `bedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`bedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreApiKeyCredentialProvider <a name="BedrockagentcoreApiKeyCredentialProvider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreApiKeyCredentialProvider(Construct Scope, string Id, BedrockagentcoreApiKeyCredentialProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWo">ResetApiKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWoVersion">ResetApiKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiKeyWo` <a name="ResetApiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWo"></a>

```csharp
private void ResetApiKeyWo()
```

##### `ResetApiKeyWoVersion` <a name="ResetApiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWoVersion"></a>

```csharp
private void ResetApiKeyWoVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreApiKeyCredentialProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreApiKeyCredentialProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreApiKeyCredentialProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreApiKeyCredentialProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">ApiKeySecretArn</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoInput">ApiKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersionInput">ApiKeyWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWo">ApiKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApiKeySecretArn`<sup>Required</sup> <a name="ApiKeySecretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```csharp
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList ApiKeySecretArn { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList</a>

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```csharp
public string CredentialProviderArn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKeyWoInput`<sup>Optional</sup> <a name="ApiKeyWoInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoInput"></a>

```csharp
public string ApiKeyWoInput { get; }
```

- *Type:* string

---

##### `ApiKeyWoVersionInput`<sup>Optional</sup> <a name="ApiKeyWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersionInput"></a>

```csharp
public double ApiKeyWoVersionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiKeyWo`<sup>Required</sup> <a name="ApiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWo"></a>

```csharp
public string ApiKeyWo { get; }
```

- *Type:* string

---

##### `ApiKeyWoVersion`<sup>Required</sup> <a name="ApiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersion"></a>

```csharp
public double ApiKeyWoVersion { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn {

};
```


### BedrockagentcoreApiKeyCredentialProviderConfig <a name="BedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreApiKeyCredentialProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ApiKey = null,
    string ApiKeyWo = null,
    double ApiKeyWoVersion = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWo">ApiKeyWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}.

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}.

---

##### `ApiKeyWo`<sup>Optional</sup> <a name="ApiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWo"></a>

```csharp
public string ApiKeyWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}.

---

##### `ApiKeyWoVersion`<sup>Optional</sup> <a name="ApiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWoVersion"></a>

```csharp
public double ApiKeyWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#region BedrockagentcoreApiKeyCredentialProvider#region}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get"></a>

```csharp
private BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---



