# `bedrockagentcoreApiKeyCredentialProvider` Submodule <a name="`bedrockagentcoreApiKeyCredentialProvider` Submodule" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreApiKeyCredentialProvider <a name="BedrockagentcoreApiKeyCredentialProvider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider aws_bedrockagentcore_api_key_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider(scope: Construct, id: string, config: BedrockagentcoreApiKeyCredentialProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig">BedrockagentcoreApiKeyCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWo">resetApiKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWoVersion">resetApiKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiKeyWo` <a name="resetApiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWo"></a>

```typescript
public resetApiKeyWo(): void
```

##### `resetApiKeyWoVersion` <a name="resetApiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetApiKeyWoVersion"></a>

```typescript
public resetApiKeyWoVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreApiKeyCredentialProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreApiKeyCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreApiKeyCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreApiKeyCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn">apiKeySecretArn</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoInput">apiKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersionInput">apiKeyWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWo">apiKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersion">apiKeyWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiKeySecretArn`<sup>Required</sup> <a name="apiKeySecretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeySecretArn"></a>

```typescript
public readonly apiKeySecretArn: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList</a>

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKeyWoInput`<sup>Optional</sup> <a name="apiKeyWoInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoInput"></a>

```typescript
public readonly apiKeyWoInput: string;
```

- *Type:* string

---

##### `apiKeyWoVersionInput`<sup>Optional</sup> <a name="apiKeyWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersionInput"></a>

```typescript
public readonly apiKeyWoVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiKeyWo`<sup>Required</sup> <a name="apiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWo"></a>

```typescript
public readonly apiKeyWo: string;
```

- *Type:* string

---

##### `apiKeyWoVersion`<sup>Required</sup> <a name="apiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.apiKeyWoVersion"></a>

```typescript
public readonly apiKeyWoVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

const bedrockagentcoreApiKeyCredentialProviderApiKeySecretArn: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn = { ... }
```


### BedrockagentcoreApiKeyCredentialProviderConfig <a name="BedrockagentcoreApiKeyCredentialProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

const bedrockagentcoreApiKeyCredentialProviderConfig: bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey">apiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWo">apiKeyWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWoVersion">apiKeyWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#name BedrockagentcoreApiKeyCredentialProvider#name}.

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key BedrockagentcoreApiKeyCredentialProvider#api_key}.

---

##### `apiKeyWo`<sup>Optional</sup> <a name="apiKeyWo" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWo"></a>

```typescript
public readonly apiKeyWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo BedrockagentcoreApiKeyCredentialProvider#api_key_wo}.

---

##### `apiKeyWoVersion`<sup>Optional</sup> <a name="apiKeyWoVersion" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.apiKeyWoVersion"></a>

```typescript
public readonly apiKeyWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#api_key_wo_version BedrockagentcoreApiKeyCredentialProvider#api_key_wo_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/bedrockagentcore_api_key_credential_provider#region BedrockagentcoreApiKeyCredentialProvider#region}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get"></a>

```typescript
public get(index: number): BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference <a name="BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreApiKeyCredentialProvider } from '@cdktf/provider-aws'

new bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreApiKeyCredentialProvider.BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn">BedrockagentcoreApiKeyCredentialProviderApiKeySecretArn</a>

---



