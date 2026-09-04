# `dataAwsBedrockFoundationModelAgreementOffers` Submodule <a name="`dataAwsBedrockFoundationModelAgreementOffers` Submodule" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModelAgreementOffers <a name="DataAwsBedrockFoundationModelAgreementOffers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers aws_bedrock_foundation_model_agreement_offers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers(scope: Construct, id: string, config: DataAwsBedrockFoundationModelAgreementOffersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig">DataAwsBedrockFoundationModelAgreementOffersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig">DataAwsBedrockFoundationModelAgreementOffersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOfferType">resetOfferType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetOfferType` <a name="resetOfferType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOfferType"></a>

```typescript
public resetOfferType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsBedrockFoundationModelAgreementOffers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsBedrockFoundationModelAgreementOffers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockFoundationModelAgreementOffers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockFoundationModelAgreementOffers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModelAgreementOffers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offers">offers</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList">DataAwsBedrockFoundationModelAgreementOffersOffersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerTypeInput">offerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerType">offerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `offers`<sup>Required</sup> <a name="offers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offers"></a>

```typescript
public readonly offers: DataAwsBedrockFoundationModelAgreementOffersOffersList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList">DataAwsBedrockFoundationModelAgreementOffersOffersList</a>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `offerTypeInput`<sup>Optional</sup> <a name="offerTypeInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerTypeInput"></a>

```typescript
public readonly offerTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `offerType`<sup>Required</sup> <a name="offerType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerType"></a>

```typescript
public readonly offerType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelAgreementOffersConfig <a name="DataAwsBedrockFoundationModelAgreementOffersConfig" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersConfig: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#model_id DataAwsBedrockFoundationModelAgreementOffers#model_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.offerType">offerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#offer_type DataAwsBedrockFoundationModelAgreementOffers#offer_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#model_id DataAwsBedrockFoundationModelAgreementOffers#model_id}.

---

##### `offerType`<sup>Optional</sup> <a name="offerType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.offerType"></a>

```typescript
public readonly offerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#offer_type DataAwsBedrockFoundationModelAgreementOffers#offer_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/bedrock_foundation_model_agreement_offers#region DataAwsBedrockFoundationModelAgreementOffers#region}

---

### DataAwsBedrockFoundationModelAgreementOffersOffers <a name="DataAwsBedrockFoundationModelAgreementOffersOffers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffers: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetails: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard = { ... }
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

const dataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm: dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockFoundationModelAgreementOffersOffersList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerId">offerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerToken">offerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.termDetails">termDetails</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers">DataAwsBedrockFoundationModelAgreementOffersOffers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offerId`<sup>Required</sup> <a name="offerId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerId"></a>

```typescript
public readonly offerId: string;
```

- *Type:* string

---

##### `offerToken`<sup>Required</sup> <a name="offerToken" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerToken"></a>

```typescript
public readonly offerToken: string;
```

- *Type:* string

---

##### `termDetails`<sup>Required</sup> <a name="termDetails" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.termDetails"></a>

```typescript
public readonly termDetails: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffers;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers">DataAwsBedrockFoundationModelAgreementOffersOffers</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.legalTerm">legalTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.supportTerm">supportTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.usageBasedPricingTerm">usageBasedPricingTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.validityTerm">validityTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `legalTerm`<sup>Required</sup> <a name="legalTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.legalTerm"></a>

```typescript
public readonly legalTerm: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList</a>

---

##### `supportTerm`<sup>Required</sup> <a name="supportTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.supportTerm"></a>

```typescript
public readonly supportTerm: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList</a>

---

##### `usageBasedPricingTerm`<sup>Required</sup> <a name="usageBasedPricingTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.usageBasedPricingTerm"></a>

```typescript
public readonly usageBasedPricingTerm: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList</a>

---

##### `validityTerm`<sup>Required</sup> <a name="validityTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.validityTerm"></a>

```typescript
public readonly validityTerm: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.refundPolicyDescription">refundPolicyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refundPolicyDescription`<sup>Required</sup> <a name="refundPolicyDescription" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.refundPolicyDescription"></a>

```typescript
public readonly refundPolicyDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.rateCard">rateCard</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateCard`<sup>Required</sup> <a name="rateCard" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.rateCard"></a>

```typescript
public readonly rateCard: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.price">price</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.price"></a>

```typescript
public readonly price: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get"></a>

```typescript
public get(index: number): DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer"></a>

```typescript
import { dataAwsBedrockFoundationModelAgreementOffers } from '@cdktn/provider-aws'

new dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.agreementDuration">agreementDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agreementDuration`<sup>Required</sup> <a name="agreementDuration" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.agreementDuration"></a>

```typescript
public readonly agreementDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm</a>

---



