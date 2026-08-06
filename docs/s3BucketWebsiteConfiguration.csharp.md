# `s3BucketWebsiteConfiguration` Submodule <a name="`s3BucketWebsiteConfiguration` Submodule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketWebsiteConfiguration <a name="S3BucketWebsiteConfiguration" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration aws_s3_bucket_website_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfiguration(Construct Scope, string Id, S3BucketWebsiteConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig">S3BucketWebsiteConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig">S3BucketWebsiteConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument">PutErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument">PutIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo">PutRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule">PutRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument">ResetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument">ResetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo">ResetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule">ResetRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRules">ResetRoutingRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorDocument` <a name="PutErrorDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument"></a>

```csharp
private void PutErrorDocument(S3BucketWebsiteConfigurationErrorDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---

##### `PutIndexDocument` <a name="PutIndexDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument"></a>

```csharp
private void PutIndexDocument(S3BucketWebsiteConfigurationIndexDocument Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---

##### `PutRedirectAllRequestsTo` <a name="PutRedirectAllRequestsTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo"></a>

```csharp
private void PutRedirectAllRequestsTo(S3BucketWebsiteConfigurationRedirectAllRequestsTo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---

##### `PutRoutingRule` <a name="PutRoutingRule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule"></a>

```csharp
private void PutRoutingRule(IResolvable|S3BucketWebsiteConfigurationRoutingRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---

##### `ResetErrorDocument` <a name="ResetErrorDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument"></a>

```csharp
private void ResetErrorDocument()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument"></a>

```csharp
private void ResetIndexDocument()
```

##### `ResetRedirectAllRequestsTo` <a name="ResetRedirectAllRequestsTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo"></a>

```csharp
private void ResetRedirectAllRequestsTo()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoutingRule` <a name="ResetRoutingRule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule"></a>

```csharp
private void ResetRoutingRule()
```

##### `ResetRoutingRules` <a name="ResetRoutingRules" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRules"></a>

```csharp
private void ResetRoutingRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3BucketWebsiteConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3BucketWebsiteConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3BucketWebsiteConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3BucketWebsiteConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

S3BucketWebsiteConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3BucketWebsiteConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketWebsiteConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketWebsiteConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3BucketWebsiteConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument">ErrorDocument</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument">IndexDocument</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule">RoutingRule</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteDomain">WebsiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteEndpoint">WebsiteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput">ErrorDocumentInput</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput">IndexDocumentInput</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput">RedirectAllRequestsToInput</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput">RoutingRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRulesInput">RoutingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRules">RoutingRules</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ErrorDocument`<sup>Required</sup> <a name="ErrorDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument"></a>

```csharp
public S3BucketWebsiteConfigurationErrorDocumentOutputReference ErrorDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a>

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument"></a>

```csharp
public S3BucketWebsiteConfigurationIndexDocumentOutputReference IndexDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a>

---

##### `RedirectAllRequestsTo`<sup>Required</sup> <a name="RedirectAllRequestsTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo"></a>

```csharp
public S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference RedirectAllRequestsTo { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a>

---

##### `RoutingRule`<sup>Required</sup> <a name="RoutingRule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleList RoutingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a>

---

##### `WebsiteDomain`<sup>Required</sup> <a name="WebsiteDomain" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteDomain"></a>

```csharp
public string WebsiteDomain { get; }
```

- *Type:* string

---

##### `WebsiteEndpoint`<sup>Required</sup> <a name="WebsiteEndpoint" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.websiteEndpoint"></a>

```csharp
public string WebsiteEndpoint { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ErrorDocumentInput`<sup>Optional</sup> <a name="ErrorDocumentInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput"></a>

```csharp
public S3BucketWebsiteConfigurationErrorDocument ErrorDocumentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput"></a>

```csharp
public S3BucketWebsiteConfigurationIndexDocument IndexDocumentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---

##### `RedirectAllRequestsToInput`<sup>Optional</sup> <a name="RedirectAllRequestsToInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput"></a>

```csharp
public S3BucketWebsiteConfigurationRedirectAllRequestsTo RedirectAllRequestsToInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingRuleInput`<sup>Optional</sup> <a name="RoutingRuleInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput"></a>

```csharp
public IResolvable|S3BucketWebsiteConfigurationRoutingRule[] RoutingRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---

##### `RoutingRulesInput`<sup>Optional</sup> <a name="RoutingRulesInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRulesInput"></a>

```csharp
public string RoutingRulesInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRules"></a>

```csharp
public string RoutingRules { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketWebsiteConfigurationConfig <a name="S3BucketWebsiteConfigurationConfig" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    S3BucketWebsiteConfigurationErrorDocument ErrorDocument = null,
    string ExpectedBucketOwner = null,
    string Id = null,
    S3BucketWebsiteConfigurationIndexDocument IndexDocument = null,
    S3BucketWebsiteConfigurationRedirectAllRequestsTo RedirectAllRequestsTo = null,
    string Region = null,
    IResolvable|S3BucketWebsiteConfigurationRoutingRule[] RoutingRule = null,
    string RoutingRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument">ErrorDocument</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | error_document block. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument">IndexDocument</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | index_document block. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | redirect_all_requests_to block. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule">RoutingRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | routing_rule block. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRules">RoutingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}.

---

##### `ErrorDocument`<sup>Optional</sup> <a name="ErrorDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument"></a>

```csharp
public S3BucketWebsiteConfigurationErrorDocument ErrorDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

error_document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument"></a>

```csharp
public S3BucketWebsiteConfigurationIndexDocument IndexDocument { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

index_document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}

---

##### `RedirectAllRequestsTo`<sup>Optional</sup> <a name="RedirectAllRequestsTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo"></a>

```csharp
public S3BucketWebsiteConfigurationRedirectAllRequestsTo RedirectAllRequestsTo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

redirect_all_requests_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#region S3BucketWebsiteConfiguration#region}

---

##### `RoutingRule`<sup>Optional</sup> <a name="RoutingRule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule"></a>

```csharp
public IResolvable|S3BucketWebsiteConfigurationRoutingRule[] RoutingRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}

---

##### `RoutingRules`<sup>Optional</sup> <a name="RoutingRules" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRules"></a>

```csharp
public string RoutingRules { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}.

---

### S3BucketWebsiteConfigurationErrorDocument <a name="S3BucketWebsiteConfigurationErrorDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationErrorDocument {
    string Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}.

---

### S3BucketWebsiteConfigurationIndexDocument <a name="S3BucketWebsiteConfigurationIndexDocument" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationIndexDocument {
    string Suffix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}. |

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}.

---

### S3BucketWebsiteConfigurationRedirectAllRequestsTo <a name="S3BucketWebsiteConfigurationRedirectAllRequestsTo" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRedirectAllRequestsTo {
    string HostName,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

### S3BucketWebsiteConfigurationRoutingRule <a name="S3BucketWebsiteConfigurationRoutingRule" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRule {
    S3BucketWebsiteConfigurationRoutingRuleRedirect Redirect,
    S3BucketWebsiteConfigurationRoutingRuleCondition Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect">Redirect</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | redirect block. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | condition block. |

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleRedirect Redirect { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}

---

### S3BucketWebsiteConfigurationRoutingRuleCondition <a name="S3BucketWebsiteConfigurationRoutingRuleCondition" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleCondition {
    string HttpErrorCodeReturnedEquals = null,
    string KeyPrefixEquals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals">HttpErrorCodeReturnedEquals</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals">KeyPrefixEquals</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}. |

---

##### `HttpErrorCodeReturnedEquals`<sup>Optional</sup> <a name="HttpErrorCodeReturnedEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals"></a>

```csharp
public string HttpErrorCodeReturnedEquals { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}.

---

##### `KeyPrefixEquals`<sup>Optional</sup> <a name="KeyPrefixEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals"></a>

```csharp
public string KeyPrefixEquals { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}.

---

### S3BucketWebsiteConfigurationRoutingRuleRedirect <a name="S3BucketWebsiteConfigurationRoutingRuleRedirect" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleRedirect {
    string HostName = null,
    string HttpRedirectCode = null,
    string Protocol = null,
    string ReplaceKeyPrefixWith = null,
    string ReplaceKeyWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode">HttpRedirectCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith">ReplaceKeyPrefixWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith">ReplaceKeyWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}. |

---

##### `HostName`<sup>Optional</sup> <a name="HostName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}.

---

##### `HttpRedirectCode`<sup>Optional</sup> <a name="HttpRedirectCode" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode"></a>

```csharp
public string HttpRedirectCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}.

---

##### `ReplaceKeyPrefixWith`<sup>Optional</sup> <a name="ReplaceKeyPrefixWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith"></a>

```csharp
public string ReplaceKeyPrefixWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}.

---

##### `ReplaceKeyWith`<sup>Optional</sup> <a name="ReplaceKeyWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith"></a>

```csharp
public string ReplaceKeyWith { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketWebsiteConfigurationErrorDocumentOutputReference <a name="S3BucketWebsiteConfigurationErrorDocumentOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationErrorDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsiteConfigurationErrorDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---


### S3BucketWebsiteConfigurationIndexDocumentOutputReference <a name="S3BucketWebsiteConfigurationIndexDocumentOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationIndexDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsiteConfigurationIndexDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---


### S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference <a name="S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsiteConfigurationRedirectAllRequestsTo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---


### S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals">ResetHttpErrorCodeReturnedEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals">ResetKeyPrefixEquals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpErrorCodeReturnedEquals` <a name="ResetHttpErrorCodeReturnedEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals"></a>

```csharp
private void ResetHttpErrorCodeReturnedEquals()
```

##### `ResetKeyPrefixEquals` <a name="ResetKeyPrefixEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals"></a>

```csharp
private void ResetKeyPrefixEquals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput">HttpErrorCodeReturnedEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput">KeyPrefixEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals">HttpErrorCodeReturnedEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals">KeyPrefixEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpErrorCodeReturnedEqualsInput`<sup>Optional</sup> <a name="HttpErrorCodeReturnedEqualsInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput"></a>

```csharp
public string HttpErrorCodeReturnedEqualsInput { get; }
```

- *Type:* string

---

##### `KeyPrefixEqualsInput`<sup>Optional</sup> <a name="KeyPrefixEqualsInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput"></a>

```csharp
public string KeyPrefixEqualsInput { get; }
```

- *Type:* string

---

##### `HttpErrorCodeReturnedEquals`<sup>Required</sup> <a name="HttpErrorCodeReturnedEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals"></a>

```csharp
public string HttpErrorCodeReturnedEquals { get; }
```

- *Type:* string

---

##### `KeyPrefixEquals`<sup>Required</sup> <a name="KeyPrefixEquals" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals"></a>

```csharp
public string KeyPrefixEquals { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---


### S3BucketWebsiteConfigurationRoutingRuleList <a name="S3BucketWebsiteConfigurationRoutingRuleList" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get"></a>

```csharp
private S3BucketWebsiteConfigurationRoutingRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketWebsiteConfigurationRoutingRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---


### S3BucketWebsiteConfigurationRoutingRuleOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition"></a>

```csharp
private void PutCondition(S3BucketWebsiteConfigurationRoutingRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect"></a>

```csharp
private void PutRedirect(S3BucketWebsiteConfigurationRoutingRuleRedirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference Redirect { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleRedirect RedirectInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketWebsiteConfigurationRoutingRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>

---


### S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName">ResetHostName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode">ResetHttpRedirectCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith">ResetReplaceKeyPrefixWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith">ResetReplaceKeyWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostName` <a name="ResetHostName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName"></a>

```csharp
private void ResetHostName()
```

##### `ResetHttpRedirectCode` <a name="ResetHttpRedirectCode" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode"></a>

```csharp
private void ResetHttpRedirectCode()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetReplaceKeyPrefixWith` <a name="ResetReplaceKeyPrefixWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith"></a>

```csharp
private void ResetReplaceKeyPrefixWith()
```

##### `ResetReplaceKeyWith` <a name="ResetReplaceKeyWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith"></a>

```csharp
private void ResetReplaceKeyWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput">HttpRedirectCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput">ReplaceKeyPrefixWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput">ReplaceKeyWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode">HttpRedirectCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith">ReplaceKeyPrefixWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith">ReplaceKeyWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `HttpRedirectCodeInput`<sup>Optional</sup> <a name="HttpRedirectCodeInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput"></a>

```csharp
public string HttpRedirectCodeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ReplaceKeyPrefixWithInput`<sup>Optional</sup> <a name="ReplaceKeyPrefixWithInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput"></a>

```csharp
public string ReplaceKeyPrefixWithInput { get; }
```

- *Type:* string

---

##### `ReplaceKeyWithInput`<sup>Optional</sup> <a name="ReplaceKeyWithInput" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput"></a>

```csharp
public string ReplaceKeyWithInput { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `HttpRedirectCode`<sup>Required</sup> <a name="HttpRedirectCode" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode"></a>

```csharp
public string HttpRedirectCode { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ReplaceKeyPrefixWith`<sup>Required</sup> <a name="ReplaceKeyPrefixWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith"></a>

```csharp
public string ReplaceKeyPrefixWith { get; }
```

- *Type:* string

---

##### `ReplaceKeyWith`<sup>Required</sup> <a name="ReplaceKeyWith" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith"></a>

```csharp
public string ReplaceKeyWith { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsiteConfigurationRoutingRuleRedirect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---



