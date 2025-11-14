# `bedrockagentcoreBrowser` Submodule <a name="`bedrockagentcoreBrowser` Submodule" id="@cdktf/provider-aws.bedrockagentcoreBrowser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowser <a name="BedrockagentcoreBrowser" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser aws_bedrockagentcore_browser}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowser(scope: Construct, id: string, config: BedrockagentcoreBrowserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig">BedrockagentcoreBrowserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig">BedrockagentcoreBrowserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording">putRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording">resetRecording</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: IResolvable | BedrockagentcoreBrowserNetworkConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putNetworkConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]

---

##### `putRecording` <a name="putRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording"></a>

```typescript
public putRecording(value: IResolvable | BedrockagentcoreBrowserRecording[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putRecording.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreBrowserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetRecording` <a name="resetRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRecording"></a>

```typescript
public resetRecording(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreBrowser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreBrowser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreBrowser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreBrowser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn">browserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId">browserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording">recording</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput">recordingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `browserArn`<sup>Required</sup> <a name="browserArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserArn"></a>

```typescript
public readonly browserArn: string;
```

- *Type:* string

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreBrowserNetworkConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList">BedrockagentcoreBrowserNetworkConfigurationList</a>

---

##### `recording`<sup>Required</sup> <a name="recording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recording"></a>

```typescript
public readonly recording: BedrockagentcoreBrowserRecordingList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList">BedrockagentcoreBrowserRecordingList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreBrowserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference">BedrockagentcoreBrowserTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | BedrockagentcoreBrowserNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]

---

##### `recordingInput`<sup>Optional</sup> <a name="recordingInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.recordingInput"></a>

```typescript
public readonly recordingInput: IResolvable | BedrockagentcoreBrowserRecording[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreBrowserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserConfig <a name="BedrockagentcoreBrowserConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserConfig: bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]</code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording">recording</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]</code> | recording block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#name BedrockagentcoreBrowser#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#description BedrockagentcoreBrowser#description}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#execution_role_arn BedrockagentcoreBrowser#execution_role_arn}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: IResolvable | BedrockagentcoreBrowserNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#network_configuration BedrockagentcoreBrowser#network_configuration}

---

##### `recording`<sup>Optional</sup> <a name="recording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.recording"></a>

```typescript
public readonly recording: IResolvable | BedrockagentcoreBrowserRecording[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]

recording block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#recording BedrockagentcoreBrowser#recording}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#region BedrockagentcoreBrowser#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#tags BedrockagentcoreBrowser#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreBrowserTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#timeouts BedrockagentcoreBrowser#timeouts}

---

### BedrockagentcoreBrowserNetworkConfiguration <a name="BedrockagentcoreBrowserNetworkConfiguration" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserNetworkConfiguration: bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]</code> | vpc_config block. |

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#network_mode BedrockagentcoreBrowser#network_mode}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#vpc_config BedrockagentcoreBrowser#vpc_config}

---

### BedrockagentcoreBrowserNetworkConfigurationVpcConfig <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserNetworkConfigurationVpcConfig: bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#security_groups BedrockagentcoreBrowser#security_groups}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#subnets BedrockagentcoreBrowser#subnets}.

---

### BedrockagentcoreBrowserRecording <a name="BedrockagentcoreBrowserRecording" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserRecording: bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location">s3Location</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]</code> | s3_location block. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#enabled BedrockagentcoreBrowser#enabled}.

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording.property.s3Location"></a>

```typescript
public readonly s3Location: IResolvable | BedrockagentcoreBrowserRecordingS3Location[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]

s3_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#s3_location BedrockagentcoreBrowser#s3_location}

---

### BedrockagentcoreBrowserRecordingS3Location <a name="BedrockagentcoreBrowserRecordingS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserRecordingS3Location: bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#bucket BedrockagentcoreBrowser#bucket}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#prefix BedrockagentcoreBrowser#prefix}.

---

### BedrockagentcoreBrowserTimeouts <a name="BedrockagentcoreBrowserTimeouts" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

const bedrockagentcoreBrowserTimeouts: bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#create BedrockagentcoreBrowser#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_browser#delete BedrockagentcoreBrowser#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserNetworkConfigurationList <a name="BedrockagentcoreBrowserNetworkConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserNetworkConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>[]

---


### BedrockagentcoreBrowserNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]

---

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList">BedrockagentcoreBrowserNetworkConfigurationVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreBrowserNetworkConfigurationVpcConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList">BedrockagentcoreBrowserNetworkConfigurationVpcConfigList</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserNetworkConfiguration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfiguration">BedrockagentcoreBrowserNetworkConfiguration</a>

---


### BedrockagentcoreBrowserNetworkConfigurationVpcConfigList <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfigList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>[]

---


### BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserNetworkConfigurationVpcConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserNetworkConfigurationVpcConfig">BedrockagentcoreBrowserNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreBrowserRecordingList <a name="BedrockagentcoreBrowserRecordingList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserRecordingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserRecording[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>[]

---


### BedrockagentcoreBrowserRecordingOutputReference <a name="BedrockagentcoreBrowserRecordingOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: IResolvable | BedrockagentcoreBrowserRecordingS3Location[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.putS3Location.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetS3Location` <a name="resetS3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: BedrockagentcoreBrowserRecordingS3LocationList;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList">BedrockagentcoreBrowserRecordingS3LocationList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | BedrockagentcoreBrowserRecordingS3Location[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserRecording;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecording">BedrockagentcoreBrowserRecording</a>

---


### BedrockagentcoreBrowserRecordingS3LocationList <a name="BedrockagentcoreBrowserRecordingS3LocationList" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserRecordingS3LocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserRecordingS3Location[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>[]

---


### BedrockagentcoreBrowserRecordingS3LocationOutputReference <a name="BedrockagentcoreBrowserRecordingS3LocationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserRecordingS3Location;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserRecordingS3Location">BedrockagentcoreBrowserRecordingS3Location</a>

---


### BedrockagentcoreBrowserTimeoutsOutputReference <a name="BedrockagentcoreBrowserTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowser } from '@cdktf/provider-aws'

new bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreBrowser.BedrockagentcoreBrowserTimeouts">BedrockagentcoreBrowserTimeouts</a>

---



